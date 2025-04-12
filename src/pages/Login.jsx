import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <h1 className="logo">Namra</h1>
        <p className="tagline">Your Safe Space, Always.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Hello again!</h2>
          <p className="card-subtitle">Log in to your account</p>
        </div>

        <form className="form">
          <input
            type="email"
            className="input-field"
            placeholder="lilyamber@gmail.com"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Ammn1234@"
          />

          {/* ✅ Single Forgot Password Link */}
          <div className="forgot-password">
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="submit-btn">
            Log in
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
