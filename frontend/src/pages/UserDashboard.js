import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/events');
        const data = await res.json();

        // ✅ Filter events by user email
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
    navigate('/');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome, {userName}</h1>

      {/* Button to fill new event */}
      <button
        onClick={() => navigate('/event-form')}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
      >
        ➕ Fill New Event Form
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mr-2"
      >
        🚪 Logout
      </button>

      <button
        onClick={() => navigate('/')}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        ⬅️ Back to Home
      </button>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">🗓️ Your Event Requests:</h2>
        {events.length === 0 ? (
          <p className="text-gray-600">No events submitted yet.</p>
        ) : (
          <ul className="space-y-2">
            {events.map((event, idx) => (
              <li key={idx} className="border p-4 rounded bg-white shadow-sm">
                <p><strong>Type:</strong> {event.eventType}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Guests:</strong> {event.guests}</p>
                <p><strong>Status:</strong> <span className="font-semibold">{event.status}</span></p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
