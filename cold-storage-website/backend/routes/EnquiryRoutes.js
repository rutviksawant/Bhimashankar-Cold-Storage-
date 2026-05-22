const express = require("express");
const router = express.Router();
const Enquiry = require("../Models/Enquiry");

// Save enquiry
router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all enquiries
router.get("/", async (req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });
  res.json(enquiries);
});

router.delete("/enquiries/:id", async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Enquiry deleted" });
});


module.exports = router;
