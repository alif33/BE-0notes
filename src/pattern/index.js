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
    articles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article"
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pattern", schema);
