import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Ensure installed: npm install lucide-react

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Festive&display=swap',
      'https://fonts.googleapis.com/css2?family=Monoton&display=swap',
    ];
    fonts.forEach(href => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Playfair Display, serif' }}>
      
      {/* Desktop Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 hidden sm:flex justify-between items-center px-10 py-4">
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
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-800 hover:text-green-600 focus:outline-none">User ▼</button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 right-0 rounded z-50">
                <Link to="/user-register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">User Register</Link>
                <Link to="/user-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">User Login</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 flex sm:hidden justify-between items-center px-6 py-4">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 focus:outline-none">
          <Menu size={28} />
        </button>
        <img src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`} alt="Logo" className="h-12 object-contain" />
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md px-6 pb-4 pt-2 fixed top-16 w-full z-40">
          <Link to="/" className="block py-2 text-gray-800 hover:text-green-600">Home</Link>
          <a href="#about" className="block py-2 text-gray-800 hover:text-green-600">About</a>
          <a href="#services" className="block py-2 text-gray-800 hover:text-green-600">Services</a>
          <Link to="/event-form" className="block py-2 text-gray-800 hover:text-green-600">Fill Event Requirement</Link>
          <Link to="/user-register" className="block py-2 text-gray-800 hover:text-green-600">User Register</Link>
          <Link to="/user-login" className="block py-2 text-gray-800 hover:text-green-600">User Login</Link>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center text-white h-screen bg-cover bg-center pt-24 px-4" style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
          fontFamily: 'Festive, cursive'
        }}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl mb-4">
          Welcome to <span style={{ fontFamily: 'Monoton, cursive' }}>April Events</span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-light">Crafting Memorable Celebrations</p>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-green-50 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-700">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At April Events, we believe every event deserves to be unforgettable. With years of experience in organizing
          weddings, corporate functions, and private parties, our team works closely with clients to bring their dreams to life.
        </p>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-green-700">Our Services</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
          {[
            { title: 'Wedding Planning', desc: 'From engagement to your big day, we take care of every detail.' },
            { title: 'Corporate Events', desc: 'Professional events that reflect your brand image perfectly.' },
            { title: 'Private Parties', desc: 'Birthdays to grand celebrations — we make it unforgettable.' },
          ].map((service, idx) => (
            <div key={idx} className="w-full md:w-72 p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
