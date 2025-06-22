import React, { useState, useEffect } from 'react';
import UserHeader from '../components/UserHeader';

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

  useEffect(() => {
    const playfairLink = document.createElement('link');
    playfairLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap';
    playfairLink.rel = 'stylesheet';
    document.head.appendChild(playfairLink);
  }, []);

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('✅ Submitted successfully!');
        setFormData({ name: '', email: '', eventType: '', guests: '', date: '', location: '', notes: '' });
      } else {
        setStatus('❌ Submission failed.');
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Error submitting form.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: 'Playfair Display, serif' }}>
      <UserHeader />

      <div className="flex justify-center items-center pt-20 pb-10">
        <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">📋 Event Requirement Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg" required />
            <input type="text" name="eventType" placeholder="Type of Event" value={formData.eventType} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg" required />
            <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg" required />
            <input type="date" name="date" value={formData.date} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg" required />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg" required />
            <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg" rows="4"></textarea>
            <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 text-lg font-semibold">
              Submit Event
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Eventform;
