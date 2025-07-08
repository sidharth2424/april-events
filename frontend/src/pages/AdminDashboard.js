import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const isToday = (someDate) => {
    const today = new Date();
    const date = new Date(someDate);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/events`);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await fetch(`${process.env.REACT_APP_API_URL}/api/events/${id}`, {
          method: 'DELETE'
        });
        setEvents(events.filter(event => event._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/events/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const updatedEvent = await res.json();
      setEvents(events.map(event => event._id === id ? updatedEvent : event));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredEvents = events.filter(e => {
    const matchStatus = filterStatus ? e.status === filterStatus : true;
    const matchSearch = searchTerm
      ? e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.email.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📋 Admin Dashboard</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
        >
          ⬅️ Back to Home
        </button>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="mr-2 font-semibold">Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search by name/email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Event Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Event</th>
              <th className="px-4 py-2 border">Guests</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map(event => (
              <tr key={event._id} className={isToday(event.date) ? 'bg-yellow-100' : ''}>
                <td className="px-4 py-2 border">{event.name}</td>
                <td className="px-4 py-2 border">{event.email}</td>
                <td className="px-4 py-2 border">{event.eventType}</td>
                <td className="px-4 py-2 border">{event.guests}</td>
                <td className="px-4 py-2 border">
                  {new Date(event.date).toLocaleDateString('en-GB')}
                </td>
                <td className="px-4 py-2 border">{event.location}</td>
                <td className="px-4 py-2 border">
                  <select
                    value={event.status}
                    onChange={(e) => handleStatusChange(event._id, e.target.value)}
                    className={`px-2 py-1 rounded text-white text-sm cursor-pointer ${
                      event.status === 'pending'
                        ? 'bg-yellow-500'
                        : event.status === 'approved'
                        ? 'bg-green-500'
                        : 'bg-blue-500'
                    }`}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
