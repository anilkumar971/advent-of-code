import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <h1>Advent of Code 2023</h1>
        {user && (
          <div className="user-info">
            <span>Welcome, {user.name}</span>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
