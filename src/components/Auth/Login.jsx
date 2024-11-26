import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Since Advent of Code uses GitHub OAuth, we'll redirect to their login page
      window.location.href = 'https://adventofcode.com/auth/github';
    } catch (err) {
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Advent of Code 2023</h2>
        <p>Login to start solving puzzles!</p>
        
        <button 
          className="github-login-btn"
          onClick={() => window.location.href = 'https://adventofcode.com/auth/github'}
        >
          Login with GitHub
        </button>

        <div className="login-footer">
          <p>Don't have an account?</p>
          <a href="https://adventofcode.com/2023/auth/github" 
             target="_blank" 
             rel="noopener noreferrer"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
