const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/book', async (req, res) => {
  try {
    const { patient, doctor, date, timeSlot } = req.body;

    const newAppointment = await Appointment.create({
      patient,
      doctor,
      date,
      timeSlot
    });

    res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/my-appointments/:userId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.params.userId })
      .populate('doctor', 'name specialization');

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;