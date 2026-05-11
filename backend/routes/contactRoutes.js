const express = require("express");
const router = express.Router();
const { submitMessage, getMessages, markAsRead } = require("../controllers/contactController");

router.route("/").post(submitMessage).get(getMessages);
router.route("/:id").patch(markAsRead);

module.exports = router;
