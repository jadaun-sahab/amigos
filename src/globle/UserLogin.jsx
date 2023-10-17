import React, { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];

    // Loop through the stored data
    for (const userData of storedData) {
      if (email === userData.email && password === userData.password) {
        // Redirect to the home page on successful login
        toast.success("Login successful !");
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
        return; // Exit the loop if a successful login is found
      }
    }

    toast.warning('Invalid email or password');
  };
  
  return (
    <>
      <div id="login3">
        <ToastContainer position="top-center"  />
        <div className="login3">
          <h3>WELCOME  &nbsp; <i className="fa-regular fa-face-smile-beam fa-beat"></i></h3>
          <div>
            <input type="email" name="email" id="email3" placeholder="Enter Your Email"
            value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input type="password" name="password" id="password3" placeholder="Enter Your Password"
           value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div><Link to="/signup">Don't have an account signup </Link></div>
          <button id="loginbtn"onClick={handleLogin} >LOGIN</button>
        </div>
      </div>
    </>
  );
}
