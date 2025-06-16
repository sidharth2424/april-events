const express = require('express');
const router = express.Router();
const EventRequirement = require('../models/EventRequirement');

// POST – Submit new event
router.post('/', async (req, res) => {
  try {
    const newEvent = new EventRequirement(req.body);
    await newEvent.save();
    res.status(201).json({ message: 'Event submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET – Fetch all events (used in Admin Dashboard)
router.get('/', async (req, res) => {
  try {
    const events = await EventRequirement.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE – Delete an event by ID
router.delete('/:id', async (req, res) => {
  try {
    await EventRequirement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ PUT – Update status of an event by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await EventRequirement.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// PATCH /api/events/:id/status
router.patch('/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const updatedEvent = await EventRequirement.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET events for a specific user
router.get('/user/:email', async (req, res) => {
  try {
    const events = await Event.find({ email: req.params.email }).sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
