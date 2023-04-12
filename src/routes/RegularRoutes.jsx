import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Navbar from '../components/shared/Navbar';

function RegularRoutes() {
  return (
    <div>
        <Navbar />  
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default RegularRoutes;
