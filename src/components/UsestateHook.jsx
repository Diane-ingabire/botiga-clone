import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/usestateHook.css";

const UsestateHook = ({ handleloginform }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 

  const toggleForm = () => setIsSignUp(!isSignUp); 

  return (
    <form>
      <div className="login-overlay">
        <div className="login-container">
          <div className="login-header">
            <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

            <IoMdClose className="close-icon" onClick={handleloginform} />
          </div>

          <div className="form-group">
            <label>Phone number or email</label>
            <div className="input-container">
              <FaUser className="icon" />
              <input type="text" placeholder="Enter phone number or email" />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input type={showPassword ? "text" : "password"} placeholder="Enter Password" />
            </div>
          </div>

          {isSignUp && (
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-container">
                <FaLock className="icon" />
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
          )}

          <Link to="#" className="forgot-password">Forgot password?</Link>

          <button type="submit" className="login-button">{isSignUp ? "Sign Up" : "Login"}</button>

          <p className="terms">
            By {isSignUp ? "signing up" : "logging in"}, you accept the new <a href="#">Terms of use</a> including
            <a href="#"> Privacy Policy </a> Botiga
          </p>

          <p className="create-account">
            {isSignUp ? (
              <>
                Already have an account? <Link to="#" onClick={toggleForm}>Login</Link>
              </>
            ) : (
              <>
                Don't have an account? <Link to="#" onClick={toggleForm}>Create one</Link>
              </>
            )}
          </p>
        </div>
      </div>
    </form>
  );
};

export default UsestateHook;
