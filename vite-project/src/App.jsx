
// ### **App Component (App.js)**

// 1. Check for the token and handle redirection accordingly.


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';
import Data from './Components/Data';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data />} />
        <Route path="/" element={<Navigate replace to="/Signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
