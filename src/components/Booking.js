// Booking.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Booking() {
  const { id, name } = useParams();

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    seats: 1, 
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    
    if (name === 'seats' && (value < 1 || value > 8)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    console.log('Booking submitted:', formData);
  };

  return (
    <div className="booking-container">
      <h3>Booking for Movie: {name}</h3>
      <form onSubmit={handleBookingSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>Number of Seats:</label>
        <input
          type="number"
          name="seats"
          value={formData.seats}
          onChange={handleInputChange}
          min="1"
          max="8"
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
