const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  { 
    title: { 
      type: String,
      required: true    
    },
    slug: { 
      type: String,
      required: true    
    },
    category: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
  
    // packages: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Package"
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", schema);