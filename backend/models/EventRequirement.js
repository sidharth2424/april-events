const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  email: String,           // ✅ keep email
  eventType: String,
  guests: Number,          // ✅ keep guests
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
