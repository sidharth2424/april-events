import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralHeader from '../components/GeneralHeader';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/events`);
        const data = await res.json();
        const userEvents = data.filter(event => event.email === userEmail);
        setEvents(userEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
  }, [userEmail]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    navigate('/user-login');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Approved</span>;
      case 'Pending':
        return <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">Pending</span>;
      case 'Rejected':
        return <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Rejected</span>;
      default:
        return <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">{status}</span>;
    }
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      minHeight: '100vh',
      background: 'linear-gradient(to top left, #f0fff4 40%, #d9fdd3 100%)'
    }}>
      <GeneralHeader />

      <div className="p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-700">Welcome, {userName} 🎉</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/event-form')} 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold">
              ➕ New Event
            </button>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 font-semibold">
              🔒 Logout
            </button>
          </div>
        </div>

        {events.length === 0 ? (
          <p className="text-gray-600">No events submitted yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{event.eventType}</h3>
                <p className="text-gray-700"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-700"><strong>Guests:</strong> {event.guests}</p>
                <p className="text-gray-700"><strong>Location:</strong> {event.location}</p>
                <div className="mt-4">{getStatusBadge(event.status)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
