import { useState, useEffect } from 'react';

function Booking() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [date, setDate] = useState('');
  const [patientId, setPatientId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchDoctors();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/appointments/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patient: patientId,
          doctor: selectedDoctor,
          date: date,
          timeSlot: selectedSlot
        })
      });
      const data = await response.json();
      setMessage(data.message);
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleBooking}>
        <input
          type="text"
          placeholder="Your Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
          <option value="">Select a Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>
              {doctor.name} - {doctor.specialization}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time Slot (e.g. 10:00 AM)"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
        />
        <button type="submit">Book Appointment</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Booking;