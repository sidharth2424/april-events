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

    const monotonLink = document.createElement('link');
    monotonLink.href = 'https://fonts.googleapis.com/css2?family=Monoton&display=swap';
    monotonLink.rel = 'stylesheet';
    document.head.appendChild(monotonLink);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Playfair Display, serif' }}>
      
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <div className="flex justify-between items-center px-10 py-4">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium text-gray-800 hover:text-green-600">Home</Link>
            <a href="#about" className="text-lg font-medium text-gray-800 hover:text-green-600">About</a>
            <a href="#services" className="text-lg font-medium text-gray-800 hover:text-green-600">Services</a>
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
      <div className="flex flex-col justify-center items-center text-center text-white h-screen bg-cover bg-center" style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
          fontFamily: 'Festive, cursive'
        }}>
        <h1 className="text-7xl md:text-8xl mb-4">
          Welcome to <span style={{ fontFamily: 'Monoton, cursive' }}>April Events</span>
        </h1>
        <p className="text-3xl md:text-4xl font-light">Crafting Memorable Celebrations</p>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-green-50 text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-700">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At April Events, we believe every event deserves to be unforgettable. With years of experience in organizing
          weddings, corporate functions, and private parties, our team works closely with clients to bring their dreams to life.
          We handle everything — from planning to execution — with utmost care and attention to detail.
        </p>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10 text-green-700">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-72 p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">Wedding Planning</h3>
            <p>From engagement to your big day, we take care of every detail to make your wedding magical.</p>
          </div>
          <div className="w-72 p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">Corporate Events</h3>
            <p>Professional and impressive corporate events that reflect your brand image with perfection.</p>
          </div>
          <div className="w-72 p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">Private Parties</h3>
            <p>Whether it's a birthday or a grand celebration, we make your private parties extraordinary.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
