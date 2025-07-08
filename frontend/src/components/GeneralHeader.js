import React from 'react';
import { useNavigate } from 'react-router-dom';

const GeneralHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center bg-white shadow-md px-6 py-2">
      {/* Logo Section */}
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <img
          src={`${process.env.PUBLIC_URL}/aprileventslogo.jpeg`}
          alt="April Events Logo"
          style={{ height: '80px' }}  // your preferred size
        />
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Home Button */}
      <div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition duration-200"
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default GeneralHeader;
