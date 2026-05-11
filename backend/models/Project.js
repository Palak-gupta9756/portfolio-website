const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
    },
    image: {
      type: String,
      default: "",
    },
    technologies: {
      type: [String],
      required: true,
    },
    githubLink: {
      type: String,
      default: "",
    },
    liveLink: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ["MERN", "React Native", "Python", "JavaScript", "Other"],
      default: "Other",
    },
    starred: {
      type: Boolean,
      default: false,
    },
    initials: {
      type: String,
      default: "",
    },
    gradient: {
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

module.exports = mongoose.model("Project", projectSchema);
