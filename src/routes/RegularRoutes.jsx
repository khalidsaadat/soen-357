import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Login from '../pages/Login'
import Navbar from '../components/shared/Navbar';
import "../static/css/login.css";
import Signup from '../pages/Signup'

function RegularRoutes() {
  return (
    <div>
        <Navbar />  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default RegularRoutes;
