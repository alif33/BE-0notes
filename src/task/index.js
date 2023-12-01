const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  { 
    title: { 
      type: String,
      required: true    
    },
    snippets: {
      type: String
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article"
    },
    content: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", schema);