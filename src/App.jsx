import React from "react";

import './static/css/index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegularRoutes from './routes/RegularRoutes'

function App() {
  return (
    <Router>
      <RegularRoutes />
    </Router>
  );
}

export default App;