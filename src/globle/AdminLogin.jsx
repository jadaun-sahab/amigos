import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    const hardcodedEmail = 'admin@gmail.com';
    const hardcodedPass = 'admin@12345';

    if (email === hardcodedEmail && password === hardcodedPass) {
      toast.success("Login successful !");
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      toast.warning('Invalid email or password');
    }
  };

  return (
    <>
      <div id="login3">
        <ToastContainer position="top-center"  />
        <div className="login3">
          <h3>WELCOME  &nbsp; <i className="fa-regular fa-face-smile-beam fa-beat"></i></h3>
          <div>
            <input type="email" name="email" id="email3" placeholder="Enter Your Email" 
            value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <input type="password" name="password" id="password3" placeholder="Enter Your Password" 
            value={password} onChange={handlePasswordChange} />
          </div>
          <button id="loginbtn" onClickCapture={handleLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}
