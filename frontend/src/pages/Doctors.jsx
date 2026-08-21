import { useState, useEffect } from 'react';

function Doctors() {
  const [doctors, setDoctors] = useState([]);

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

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '30px 0', color: '#2c3e50' }}>Our Doctors</h1>
      {doctors.map((doctor) => (
        <div key={doctor._id} className="doctor-card">
          <h3>{doctor.name}</h3>
          <p>Specialization: {doctor.specialization}</p>
          <p>Available Slots: {doctor.availableSlots.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Doctors;