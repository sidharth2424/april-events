import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralHeader from '../components/GeneralHeader';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('userEmail', data.user.email);
        navigate('/user-dashboard');
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Login failed.');
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
        <div 
          className="bg-white border border-gray-300 shadow-2xl rounded-3xl p-10 w-96"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-green-700">User Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
              required
              disabled={loading}
            />
            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg transition duration-200 flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : (
                '🚀 Login'
              )}
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

export default UserLogin;
