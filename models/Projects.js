const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  projectName: {
    type: String,
    required: true,
  },
  metadata: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  private: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  TitleImage: {
    type: String,
    required: true,
  },
  GalleryImage: {
    type: Array,
    required: true,
  },
});

const Projects = mongoose.model("project", ProjectSchema);
module.exports = Projects;
