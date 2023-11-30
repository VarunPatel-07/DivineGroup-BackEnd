const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProjectSchema = new Schema({

    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    
    projectName:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true, 
    },
    description:{
        type: String,
        required: true, 
    },
    location:{
       city:{
        type: String,
        required: true, 
       },
       state:{
        type: String,
        required: true, 
       },
       address:{
        type: String,
        required: true, 
       }
    },
    private:{
        type:Boolean,
        required:true,
        default:false
    },
    date:{
        type: Date,
        default: Date.now
    },
})


const Projects = mongoose.model("project", ProjectSchema);
module.exports = Projects;
