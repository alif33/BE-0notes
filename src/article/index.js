const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  { 
    title: { 
      type: String,
      required: true    
    },
    category: {
      type: String,
      required: true
    },
    snippets: {
      type: String
    },
    content: {
      type: String
    },
    packages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", schema);