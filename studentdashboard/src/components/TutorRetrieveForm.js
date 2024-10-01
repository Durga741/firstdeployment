import React, { useState } from 'react';
import './TutorRetrieveForm.css'; // Ensure you have this CSS file

const TutorRetrieveForm = () => {
  const [formData, setFormData] = useState({
    field: 'batchId', // Default field value that matches the database column
    value: ''
  });
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/retrieve?field=${encodeURIComponent(formData.field)}&value=${encodeURIComponent(formData.value)}`, {
        method: 'GET'
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        alert('No data found for the selected criteria');
        setResults([]);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
      alert('Error retrieving data');
    }
  };

  return (
    <div className="form-container">
      <h2>Tutor Retrieve Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="field">Select Field:</label><br />
          <select
            id="field"
            name="field"
            value={formData.field}
            onChange={handleInputChange}
          >
            <option value="batchId">Batch Id</option>
            <option value="countryLocation">Country Location</option>
            <option value="tutorId">Tutor Id/Name</option>
            <option value="phone">Phone Number</option>
            <option value="startDate">Batch Start Date</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="value">Enter The Value:</label><br />
          <input
            type="text"
            id="value"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
            required
          /><br />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display results */}
      <div className="results-container">
        <h3>Results:</h3>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TutorRetrieveForm;
