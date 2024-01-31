require("dotenv").config();
const express = require("express");
const Projects = require("../models/Projects");
const Users = require("../models/Users");
const routes = express.Router();
//  this is a component from express validater which is used to perform some backend vadiation so that we can perform some validation task on the backend
const { body, validationResult } = require("express-validator");
const fetchusers = require("../middleware/fetchusers");
const { ImageUploader } = require("../middleware/Multer");
const cloudinary = require("cloudinary").v2;
let success = false;

const handleCloudUpload = async (file) => {
  const response = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return response;
};

// ? 'ADD NOTE FUNCTION' // 'POST' Request === 1 ===> this is a post request which is used to add note in the database and show user specific progect
//?  TO TEST THE API ==> {"http://localhost:500/app/api/project/addproject"}

routes.post(
  "/addproject",
  ImageUploader,
  fetchusers,
  [
    body("ProjectName", "ProjectName OF Project Cannot Be Empty").exists(),
    body("MetaData", "MetaData OF Project Cannot Be Empty").exists(),
    body("Description", "Description OF Project Name Cannot Be Empty").exists(),
    body("Address", "Address OF Project Name Cannot Be Empty").exists(),
  ],
  async (req, res) => {
    // todo ::=====> use aws s3 bucket in the production version
    const imagearr = req.files;

    let galleryImagePaths = imagearr.GalleryImage.map((images) => images);

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json({ result });
    }
    const {
      ProjectName,
      MetaData,
      Description,
      Address,
      Pincode,
      District,
      private,
    } = req.body;

    try {
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });
      const TitleB64 = Buffer.from(imagearr.TitleImage[0].buffer).toString(
        "base64"
      );
      let TitleDataURI =
        "data:" + imagearr.TitleImage[0].mimetype + ";base64," + TitleB64;
      const CloudTitleImage = await handleCloudUpload(TitleDataURI);
      const CloudGalleryImage = [];
      for (const SingleImage of galleryImagePaths) {
        const GalleryBase64 = Buffer.from(SingleImage.buffer).toString(
          "base64"
        );
        let GalleryImgDataURI =
          "data:" + SingleImage.mimetype + ";base64," + GalleryBase64;
        const CloudGalleryImg = await handleCloudUpload(GalleryImgDataURI);

        CloudGalleryImage.push(CloudGalleryImg.secure_url);
      }

      const project = new Projects({
        userid: req.user,
        projectName: ProjectName,
        metadata: MetaData,
        description: Description,
        pincode: Pincode,
        district: District,
        address: Address,
        private: private,
        TitleImage: CloudTitleImage.secure_url,
        GalleryImage: CloudGalleryImage,
      });

      const saveProject = await project.save();

      res.json(saveProject);
    } catch (error) {
      success = false;
      console.log(error);
      res
        .status(500)
        .json({ success, message: "internel server error at add note" });
    }
  }
);

// ? 'GET ALL THE PUBLIC PROJECT' // 'GET' Request === 2 ===> this is a get request which is used to fetch all the projrct uploded by the user which is public and the private one cant be seen
//?  TO TEST THE API ==> {"http://localhost:500/app/api/project/fetchPublicProjects"}
routes.get("/fetchPublicProjects", async (req, res) => {
  try {
    const FetchProject = await Projects.find({ private: false });
    res.json(FetchProject);
  } catch (error) {
    success = false;
    res.status(500).json({ success, message: "internel server error" });
  }
});

// ? 'GET ALL PRIVETPROJECT AND ALL OF USERS ONLY THE PROJECT' // 'GET' Request === 3 ===> this is a get request which is used to get all the note of the users and which is private and public
//?  TO TEST THE API ==> {"http://localhost:500/app/api/project/fetchAllUsersProject"}

routes.get("/fetchAllUsersProject", fetchusers, async (req, res) => {
  try {
    const projects = await Projects.find({ userid: req.user });

    res.json(projects);
  } catch (error) {
    success = false;
    res.status(500).json({ success, message: "internel server error" });
  }
});

routes.get("/fetchSpecificProject/:id", fetchusers, async (req, res) => {
  try {
    let project = await Projects.findById(req.params.id);

    res.json(project);
  } catch (error) {
    success = false;
    res.status(500).json({ success, message: "internel server error" });
  }
});
// ? 'UPDATE PROJECT DETAILS' // 'PUT' Request === 4 ===> this is a put request which is used to update the project details
//?  TO TEST THE API ==> {"http://localhost:500/app/api/project/updateProjectInfo/:id"}

routes.put("/updateProjectInfo/:id", fetchusers, async (req, res) => {
  const { projectName, summary, description, location } = req.body;
  try {
    const updatedProjectInfo = {};
    if (projectName) {
      updatedProjectInfo.projectName = projectName;
    }
    if (summary) {
      updatedProjectInfo.summary = summary;
    }
    if (description) {
      updatedProjectInfo.description = description;
    }
    if (location) {
      updatedProjectInfo.location = location;
    }

    let project = await Projects.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "users not found" });
    }

    if (project.userid.toString() !== req.user) {
      res.status(405).json({ message: "you are not allowd " });
    }
    console.log("success 4");
    project = await Projects.findByIdAndUpdate(
      req.params.id,
      { $set: updatedProjectInfo },
      { new: true }
    );
    success = true;
    res.json({ success: success, message: "projects updated successfully" });
  } catch (error) {
    success = false;
    res
      .status(500)
      .json({ success, message: "internel server error at add note" });
  }
});

// ? 'DELETE PROJECT' // 'DELETE' Request === 5 ===> this is a delete requrst which is used to delete the project
//?  TO TEST THE API ==> {"http://localhost:500/app/api/project/DeleteProject/:id"}

routes.delete("/DeleteProject/:id", fetchusers, async (req, res) => {
  const { id } = req.params;
  try {
    let project = await Projects.findById(id);
    if (!project) {
      res.status(404).json({ message: "cannot find the project in database" });
    }
    if (project.userid.toString() !== req.user) {
      res.status(405).json({ message: "you are not allowed" });
    }
    project = await Projects.findByIdAndDelete(id);
    success = true;
    res.json({ success: success, message: "the note is successfully deleted" });
  } catch (error) {
    success = false;
    res
      .status(500)
      .json({ success, message: "internel server error at add note" });
  }
});

// ? 'TOGEL STATUSE' // 'POST' Request === 6 ===> this is a post requrst which is used togel the statuse of the project that it is private or public
//?  TO TEST THE API ==> {"http://localhost:500/app/api/project/TogelProjectStatus/:id"}

routes.post("/TogelProjectStatus/:id", fetchusers, async (req, res) => {
  try {
    let project = await Projects.findById(req.params.id);
    if (!project) {
      res
        .status(404)
        .json({ message: "can not find the project in the database" });
    }
    if (project.userid.toString() !== req.user) {
      res.status(405).json({ message: "you are not allowed" });
    }
    let status = "";
    if (project.private) {
      project.private = false;
      status = "public";
    } else {
      project.private = true;
      status = "private";
    }
    await project.save();
    res.json({ message: `the project is now ${status}` });
  } catch (error) {}
});

module.exports = routes;
