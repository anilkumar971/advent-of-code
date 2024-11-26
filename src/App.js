import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Auth/Login';
import Header from './components/Layout/Header';
import './App.css';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <div className="content">
                    <h2>Welcome to Advent of Code 2023</h2>
                    <p>You're now logged in and ready to solve puzzles!</p>
                    <a 
                      href="https://adventofcode.com/2023/leaderboard/private"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="join-btn"
                    >
                      Join Private Leaderboard
                    </a>
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
