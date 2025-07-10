import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralHeader from '../components/GeneralHeader';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Registered successfully! Please login.');
        navigate('/user-login');
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GeneralHeader />
      <div 
        className="min-h-screen flex items-center justify-center bg-white" 
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="bg-white border border-gray-300 shadow-2xl rounded-3xl p-10 w-96">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-700">User Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition duration-200 ${
                loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } text-white`}
            >
              {loading ? '⏳ Registering...' : '🚀 Register'}
            </button>
          </form>
          {message && (
            <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserRegister;
