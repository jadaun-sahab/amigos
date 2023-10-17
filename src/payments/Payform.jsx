 import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';


 export default function Payform() {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
     fullName: '',
     pincode: '',
     city: '',
     state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('formData', JSON.stringify(formData));

    setFormData({
      fullName: '',
      pincode: '',
      city: '',
      state: '',
    });
    navigate('/Payoption');
  };

  return (
     <>
    <div className='payform'>
      <h1>Please Enter Your Details</h1>
      <form>
        <div>
          <input type="text" id="fullName" name="fullName" placeholder='Full Name:' value={formData.fullName} onChange={handleChange}/>
        </div>
        <div>
          <input type="text" id="pincode" name="pincode" placeholder='Pincode:' value={formData.pincode} onChange={handleChange}/>
        </div>
        <div>
          <input type="text" id="city" name="city" placeholder='City:' value={formData.city} onChange={handleChange}/>
        </div>
        <div>
          <input type="text" id="state" name="state" placeholder='State:' value={formData.state} onChange={handleChange}/>
        </div>
        <button type="button" onClick={handleSubmit}>CHECKOUT</button>
      </form>
    </div>
    </>
  );
}
