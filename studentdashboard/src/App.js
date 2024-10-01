import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar
import TutorInsForm from './components/Tutorinsform'; // Import the Tutor Instructor Form
import TutorRetrieveForm from './components/TutorRetrieveForm'; // Import the Tutor Retrieve Form

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Render Navbar */}
        <Navbar />

        {/* Define Routes for Navigation */}
        <Routes>
          <Route path="/tutor-ins-form" element={<TutorInsForm />} />
          <Route path="/tutor-retrieve-form" element={<TutorRetrieveForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
