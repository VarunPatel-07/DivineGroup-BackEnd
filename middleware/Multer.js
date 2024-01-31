const multer = require("multer");

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
module.exports = {ImageUploader ,  ProfileImageUploader};
