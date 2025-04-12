import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="container">
      <div className="header">SIGN UP PAGE</div>

      <div className="logo-container">
        <h1 className="logo">Namra</h1>
        <p className="tagline">Your Safe Space, Always.</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Nice to see you!</h2>
          <p className="card-subtitle">Create your account</p>
        </div>

        <form className="form">
          <input type="text" className="input-field" placeholder="Lily Amber" />
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

          <div className="checkbox-container">
            <input type="checkbox" className="checkbox" id="terms" />
            <label htmlFor="terms" className="checkbox-label">
              I agree with Terms & Conditions
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Create account
          </button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/">
            <span>Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
