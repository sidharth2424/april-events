const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventType: String,
  guests: Number,
  date: String,
  location: String,
  notes: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'completed'],
    default: 'pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('EventRequirement', eventSchema);
