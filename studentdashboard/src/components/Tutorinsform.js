import React, { useState } from 'react';
import './Tutorinsform.css';


const Tutorinsform = () => {
  const [formData, setFormData] = useState({
    batchId: '',
    countryLocation: '',
    tutorId: '',
    phone: '',
    startDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sends form data to backend
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Tutor Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="batchId">Batch Id:</label><br />
          <input
            type="text"
            id="batchId"
            name="batchId"
            value={formData.batchId}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div className="form-group">
          <label htmlFor="countryLocation">Country Location:</label><br />
          <input
            type="text"
            id="countryLocation"
            name="countryLocation"
            value={formData.countryLocation}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div className="form-group">
          <label htmlFor="tutorId">Tutor Id/Name:</label><br />
          <input
            type="text"
            id="tutorId"
            name="tutorId"
            value={formData.tutorId}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label><br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Batch Start Date:</label><br />
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          /><br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Tutorinsform;
