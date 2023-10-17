import React, { useState } from "react";
import Adminsidebar from "./Adminsidebar";
import Sidebar from "../Component/Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Addproduct() {
  const [formData, setFormData] = useState({
    id: "",
    avatar: "",
    title: "",
    price: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jadaun-sahab.github.io/cart_api/cart.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data was successfully sent
        toast.success('Product added successfully!');
      } else {
        // Handle errors, e.g., if the API returns an error message
        const data = await response.json();
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      // Handle network or other errors
      toast.error('An error occurred while adding the product.');
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Sidebar title="ADD PRODUCT" />
      <div className="manage">
        <div className="admin">
          <div className="adminchild1">
            <Adminsidebar />
          </div>
          <div className="adminchild2">
            <div className="productaddpage">
              <h1>Please Fill The Details</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="id"
                  placeholder="ID"
                  value={formData.id}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="avatar"
                  placeholder="Avatar URL"
                  value={formData.avatar}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  value={formData.rating}
                  onChange={handleChange}
                />
                <button type="submit">ADD</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
