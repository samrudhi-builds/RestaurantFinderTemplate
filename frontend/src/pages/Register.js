import React, { useState } from "react";
import './Login.css';  // Make sure this CSS file exists and is linked

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { username, password });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h2>Register</h2>
          
          <label htmlFor="uname"><b>Username</b></label>
          <input 
            type="text" 
            placeholder="Enter Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />

          <label htmlFor="psw"><b>Password</b></label>
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
              
          <button type="submit" className="login-btn">Register</button>
          
        </div>

        <div className="container actions">
          <button type="button" className="cancelbtn">Cancel</button>
        </div>

        <div className="container extra-links">
          <span className="register">Already have an account? <a href="#">Login</a></span>
        </div>
      </form>
    </div>
  );
};

export default Register;
