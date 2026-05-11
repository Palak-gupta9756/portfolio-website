const Project = require("../models/Project");

// @desc    Get all projects
// @route   GET /api/projects
const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a project
// @route   POST /api/projects
const createProject = async (req, res, next) => {
  try {
    const { title, description, image, technologies, githubLink, liveLink, featured, order } = req.body;

    const project = await Project.create({
      title,
      description,
      image,
      technologies,
      githubLink,
      liveLink,
      featured,
      order,
    });

    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, message: "Project deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects, createProject, deleteProject };
