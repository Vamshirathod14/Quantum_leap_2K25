const express = require('express');
const Registration = require('../models/Registration');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;