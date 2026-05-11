const Contact = require("../models/Contact");

// @desc    Submit a contact message
// @route   POST /api/contact
const submitMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, message: "Message sent successfully!", data: contact });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all messages (admin)
// @route   GET /api/contact
const getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark message as read
// @route   PATCH /api/contact/:id
const markAsRead = async (req, res, next) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }
    res.json({ success: true, data: message });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitMessage, getMessages, markAsRead };
