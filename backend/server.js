const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'visys_dev',
  host: '52.66.196.233',
  database: 'devdb',
  password: 'dev@123',
  port: 5432
});

// Route to handle form submission
app.post('/submit', async (req, res) => {
  const { batchId, countryLocation, tutorId, phone, startDate } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO students (batchId, countryLocation, tutorId, phone, startDate) VALUES ($1, $2, $3, $4, $5)',
      [batchId, countryLocation, tutorId, phone, startDate]
    );
    res.status(201).send('Form data submitted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error submitting form data');
  }
});

app.get('/retrieve', async (req, res) => {
  const { field, value } = req.query; // Expecting query parameters like /retrieve?field=batchId&value=12345

  try {
    // Dynamic query based on the selected field
    const result = await pool.query(`SELECT * FROM students WHERE "${field}" = $1`, [value]);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).send('No data found for the selected criteria');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving form data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
