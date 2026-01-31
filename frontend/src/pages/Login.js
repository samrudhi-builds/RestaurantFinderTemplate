import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';  

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { username, password });
  };

  const navigate = useNavigate();
  const goToRegister = () => {
    navigate('/register'); 
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h2>Login</h2>
          
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
              
          <button type="submit" className="login-btn">Login</button>
          
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className="container actions">
          <button type="button" className="cancelbtn">Cancel</button>
        </div>

        <div className="container extra-links">
            <span className="register" onClick={goToRegister}>New here? <a href="Register">Register</a></span>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  );
};

export default Login;
