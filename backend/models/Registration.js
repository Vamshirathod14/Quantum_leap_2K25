const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  hallTicketNumber: { type: String, required: true },
  email: { type: String, required: true },
  event: { type: String, required: true },
  participantType: { type: String, enum: ['individual', 'team'], required: true },
  teamName: { type: String }, // Only if participantType is 'team'
  teamSize: { type: Number }, // 2, 3, or 4 (Only if participantType is 'team')
  teamMembers: [
    {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
  ],
});

module.exports = mongoose.model('Registration', RegistrationSchema);