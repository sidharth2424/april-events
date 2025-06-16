import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader'; // ✅ Imported here



const Eventform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    guests: '',
    date: '',
    location: '',
    notes: ''
  });



  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken')}` // optional, for future use
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('✅ Submitted successfully!');
        setFormData({
          name: '',
          email: '',
          eventType: '',
          guests: '',
          date: '',
          location: '',
          notes: ''
        });
      } else {
        setStatus('❌ Submission failed.');
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Error submitting form.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* ✅ Add logout header */}
      <UserHeader /> 

      {/* 🔐 Admin Login Button */}
      <div className="flex justify-end mb-4">
        <Link to="/admin-login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          🔐 Admin Login
        </Link>
      </div>

      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">📋 Event Requirement Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
            className="w-full border p-2 rounded" required />

          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
            className="w-full border p-2 rounded" required />

          <input type="text" name="eventType" placeholder="Type of Event" value={formData.eventType} onChange={handleChange}
            className="w-full border p-2 rounded" required />

          <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange}
            className="w-full border p-2 rounded" required />

          <input type="date" name="date" value={formData.date} onChange={handleChange}
            className="w-full border p-2 rounded" required />

          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange}
            className="w-full border p-2 rounded" required />

          <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange}
            className="w-full border p-2 rounded" rows="4"></textarea>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Submit Event
          </button>
        </form>

        {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
      </div>
    </div>
  );
};

export default Eventform;
