import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-100 flex flex-col justify-center items-center p-8"
         style={{ backgroundImage: `url('/your-background.jpg')` }}>
      <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-xl text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to April Events</h1>
        <p className="text-lg text-gray-700 mb-6">We bring your celebrations to life.</p>

        <div className="space-y-4">
          <Link to="/event-form">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded text-lg">
              📋 Fill Event Requirement
            </button>
          </Link>

          <Link to="/user-register">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded text-lg">
                📝 User Register
            </button>
         </Link>


          <Link to="/user-login">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded text-lg">
              👤 User Login
            </button>
          </Link>

          <Link to="/admin-login">
            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded text-lg">
              🔐 Admin Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
