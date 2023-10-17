import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
        
          const handleSignup = () => {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const newUser = { email, password };
            existingUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(existingUsers));
            setEmail('');
            setPassword('');
            alert('User added');
            window.location.href = '/Userlogin';
          };
 

  return (
    <>
      <div id="login3">
        <ToastContainer position="top-center"  />
        <div className="login3">
          <h3>WELCOME  &nbsp; <i className="fa-regular fa-face-smile-beam fa-beat"></i></h3>
          <div>
            <input type="email" name="email" id="email3" placeholder="Enter Your Email" 
            value={email}  onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <input type="password" name="password" id="password3" placeholder="Enter Your Password" 
            value={password}  onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <Link to="/userlogin">Already have an account Login </Link>
          </div>
          <button id="loginbtn" onClick={handleSignup}>
          SIGNUP
          </button>
        </div>
      </div>
    </>
  );
}
