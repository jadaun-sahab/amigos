import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Payoption() {
  const handleCOD = () => {
    const storedFormData = localStorage.getItem('formData');
    
    if (storedFormData) {
      const formData = JSON.parse(storedFormData);
      toast(`Name: ${formData.fullName}
      \n, Address: ${formData.city}\n, ${formData.state}\n ,${formData.pincode}`)
    } else {
      toast.error("Please Fill The Payment Form First !!")
    }
  };

  return (
  <>
    <ToastContainer position='top-center'/>
      <div className="Payoption">
        <div>
          <h2>Select Your Payment Method</h2>
          <button onClick={handleCOD}>Cash On Delivery</button>
          <button><Link to="/Debit">Debit Card</Link></button>
          <button><Link to="/Credit">Credit Card</Link></button>
          <button><Link to="/">UPI</Link></button>
          <p><Link to="/cart">x</Link></p>
        </div>
      </div>
  </>
  );
}
