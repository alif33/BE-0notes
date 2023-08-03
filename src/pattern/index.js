const mongoose = require("mongoose");

const patternSchema = new mongoose.Schema(
  { 
    title: { 
      type: String,
      required: true    
    },
    category: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    packages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pattern", patternSchema);