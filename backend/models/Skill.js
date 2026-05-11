const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Skill category is required"],
      enum: ["Frontend", "Backend", "Database", "Languages", "Tools"],
    },
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    level: {
      type: Number,
      min: 0,
      max: 100,
      default: 70,
    },
    icon: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
