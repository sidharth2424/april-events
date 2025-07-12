import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/events`, {
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

  const token = localStorage.getItem('userToken');

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Playfair Display, serif', backgroundColor: '#e6f5ec' }}>

      {/* Header */}
      <div className="flex flex-wrap items-center bg-white shadow-md px-4 sm:px-6 py-2 gap-2">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`} alt="Logo" className="h-16 sm:h-20" />
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded text-sm sm:text-base" onClick={() => navigate('/')}>Home</button>
          {token ? (
            <>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm sm:text-base" onClick={() => navigate('/user-dashboard')}>Dashboard</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded text-sm sm:text-base" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm sm:text-base" onClick={() => navigate('/user-login')}>User Login</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm sm:text-base" onClick={() => navigate('/user-register')}>User Register</button>
            </>
          )}
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-48 sm:h-64 bg-gradient-to-r from-green-300 via-green-200 to-green-100 flex items-center justify-center shadow-lg text-center px-2">
        <h1 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">Book Your Dream Event 🎉</h1>
      </div>

      {/* Main Form */}
      <div className="flex justify-center items-center py-10 px-4 sm:px-6">
        <div className="w-full max-w-5xl bg-white p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-6">

          {/* Left Image (hidden on small) */}
          <div className="hidden md:block md:w-1/2">
            <img src={`${process.env.PUBLIC_URL}/boquet.jpg`} alt="Event Inspiration" className="rounded-xl shadow-lg w-full" />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-green-700">📋 Event Requirement Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg" required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg" required />
              <input type="text" name="eventType" placeholder="Type of Event" value={formData.eventType} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg" required />
              <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg" required />
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg" required />
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg" required />
              <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-lg" rows="4"></textarea>
              <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 text-base font-semibold">Submit Event</button>
            </form>
            {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventform;
