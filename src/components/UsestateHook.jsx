import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "../styles/usestateHook.css"; // Import external CSS file

const UsestateHook = ({ handleloginform}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
   <form>
     <div className="login-overlay">
      <div className="login-container">
        <div className="login-header">
          <h2>Login</h2>
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

        <a href="#" className="forgot-password">Forgot password?</a>

        <button value="submit" className="login-button">Login</button>

        <p className="terms">
          By logging-in, you accept the new <a href="#">Terms of use</a> including
          <a href="#"> Privacy Policy </a> Botiga
        </p>

        <p className="create-account">
          Don't have an account? <a href="#" >Create one</a>
        </p>
      </div>
    </div>
   </form>
  );
};

export default UsestateHook;
