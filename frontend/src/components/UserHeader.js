import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    navigate('/'); // ✅ Redirect to Homepage
  };

  return (
    <div className="flex justify-end bg-gray-200 px-6 py-4">
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default UserHeader;
