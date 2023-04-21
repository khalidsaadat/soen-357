import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/login.css";

const Recipe = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("loggedIn", 1);
    
    navigate("/");
  };

  return (
    <div className="container" style={{padding: '3rem 0rem 0rem 3rem'}}>
    Recipe
    </div>
  );
};

export default Recipe;
