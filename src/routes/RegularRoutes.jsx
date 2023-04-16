import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "../static/css/login.css";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Navbar from '../components/shared/Navbar';
import Signup from '../pages/Signup';
import Profile from "../pages/Profile";
import Track from "../pages/Track";

function RegularRoutes() {
  return (
    <div>
        <Navbar />  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/track" element={<Track/>} />
        </Routes>
    </div>
  );
}

export default RegularRoutes;
