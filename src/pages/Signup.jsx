import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div>
          <p className="login-text-center login-text-xl login-py-4">
            Your personalized path to healthier eating
          </p>
        </div>

        <div className="login-text-center">
          <form onSubmit={handleSubmit} className="p-4">
            <p className="login-text-3xl login-mb-4">Sign up</p>

            <div className="login-mb-4 login-mt-4">
              <input
                className="login-input-email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-mb-3">
              <input
                className="login-input-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="login-text-sm login-text-gray-500 mt-1">
              </p>
            </div>

            <button className="login-submit-btn" type="submit">
              Sign up
            </button>

            <p className="login-text-sm login-text-gray-500">
              Already have an account?{" "}
              <a href="/Login" className="login-text-blue">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
