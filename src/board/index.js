const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  { 
    title: { 
      type: String,
      required: true    
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }],
    content: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", schema);