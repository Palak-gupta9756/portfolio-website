const Skill = require("../models/Skill");

// @desc    Get all skills grouped by category
// @route   GET /api/skills
const getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });

    // Group skills by category
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    res.json({ success: true, data: grouped });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a skill
// @route   POST /api/skills
const createSkill = async (req, res, next) => {
  try {
    const { category, name, level, icon, order } = req.body;
    const skill = await Skill.create({ category, name, level, icon, order });
    res.status(201).json({ success: true, data: skill });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSkills, createSkill };
