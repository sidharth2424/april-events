import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const playfairLink = document.createElement('link');
    playfairLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap';
    playfairLink.rel = 'stylesheet';
    document.head.appendChild(playfairLink);

    const festiveLink = document.createElement('link');
    festiveLink.href = 'https://fonts.googleapis.com/css2?family=Festive&display=swap';
    festiveLink.rel = 'stylesheet';
    document.head.appendChild(festiveLink);

    const montauntLink = document.createElement('link');
    montauntLink.href = 'https://fonts.googleapis.com/css2?family=Monoton&display=swap';
    montauntLink.rel = 'stylesheet';
    document.head.appendChild(montauntLink);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)` }}>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0" style={{ backgroundColor: '#FDFDFB', fontFamily: 'Playfair Display, serif' }}>
        <div className="flex justify-between items-center px-10 py-4 shadow-md">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium text-gray-800 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-green-600">About</Link>
            <Link to="/services" className="text-lg font-medium text-gray-800 hover:text-green-600">Services</Link>
          </div>

          <div className="ml-16">
            <img src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`} alt="April Events Logo" className="h-16 object-contain" />
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/event-form">
              <button className="bg-[#50C878] text-white px-4 py-2 rounded hover:bg-green-600 transition">Fill Event Requirement</button>
            </Link>

            <div className="relative">
              <button onClick={toggleDropdown} className="text-gray-800 hover:text-green-600 focus:outline-none">User ▼</button>
              {dropdownOpen && (
                <div className="absolute bg-white shadow-md mt-2 right-0 rounded z-50">
                  <Link to="/user-register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">User Register</Link>
                  <Link to="/user-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">User Login</Link>
                </div>
              )}
            </div>

            <Link to="/admin-login" className="text-gray-800 text-sm hover:text-green-600">Admin Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center text-white h-screen" style={{ fontFamily: 'Festive, cursive' }}>
        <h1 className="text-7xl md:text-8xl mb-4">
          Welcome to <span style={{ fontFamily: 'Monoton, cursive' }}>April Events</span>
        </h1>
        <p className="text-3xl md:text-4xl font-light">Crafting Memorable Celebrations</p>
      </div>
    </div>
  );
};

export default HomePage;
