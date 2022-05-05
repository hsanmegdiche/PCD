const router = require("express").Router();
const cloudinary = require("cloudinary");
const auth = require("../middleware/auth");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post("/upload", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ msg: "No files were uploaded." });

    const file = req.files.file;
    if (file.size > 10000 * 10000) {
      return res.status(400).json({ msg: "Size too large" });
    }

    if (file.mimetype !== "application/pdf") {
      return res.status(400).json({ msg: "File format is incorrect." });
    }

    file.mv("./uploads/" + file.name, async (err, result) => {
      if (err) throw err;
      res.json({ msg: "File uploaded" });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});
module.exports = router;
