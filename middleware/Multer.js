require("dotenv").config();

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
// initializing cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const imgconfig = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allow"));
  }
};
const isAllowedFormat = function (req, file, cb) {
  const allowedFormats = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
  ];
  if (allowedFormats.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file format."));
  }
};

const ImageUploader = multer({
  storage: imgconfig,
  fileFilter: isImage,
}).fields([
  {
    name: "TitleImage",
    maxCount: 1,
  },
  {
    name: "GalleryImage",
    maxCount: 100,
  },
]);
const ProfileImageUploader = multer({
  storage: imgconfig,
  fileFilter: isImage,
}).fields([
  {
    name: "ProfileImage",
    maxCount: 1,
  },
]);
const SendChatImages = multer({
  storage: imgconfig,
  fileFilter: isImage,
}).fields([
  {
    name: "ChatImages",
    maxCount: 20,
  },
]);

const EmailImgAndFilesUploader = multer({
  storage: imgconfig,
  fileFilter: isAllowedFormat,
}).fields([
  {
    name: "EmailImg",
    maxCount: 100,
  },
  {
    name: "EmailFiles",
    maxCount: 100,
  },
]);

// creating a function to upload image
const handleCloudUpload = async (file) => {
  const response = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return response;
};

module.exports = {
  ImageUploader,
  ProfileImageUploader,
  handleCloudUpload,
  SendChatImages,
  EmailImgAndFilesUploader,
};
