import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import Adminsidebar from './Adminsidebar';
import Sidebar from '../Component/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Manage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jadaun-sahab.github.io/product_api/product.json';

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  const handleRemoveItem = (itemId) => {
  //   axios
  //     .delete(`http://localhost:8008/product/${itemId}`)
  //     .then(() => {
  //       toast.error("Product Deleted")
  //       setData((prevData) => prevData.filter((item) => item.id !== itemId));
  //     })
  //     .catch((error) => {
  //       console.error("Error removing item:", error);
  //     });
  };

  return (
    <>
   <ToastContainer/>
    <Sidebar title="MANAGE"/>
    <div className='manage'>
    <div className='admin'>
      <div className='adminchild1'>
      <Adminsidebar/>
      </div>
      <div className='adminchild2'>
      
      <div className='addproduct'>
        <table>
          <thead >
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>RATING</th>
              <th>IMAGE</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody  >
        
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><FaUserTie color='rgb(43, 44, 98)'/> {item.title }</td>
                <td><BsCurrencyRupee/>{item.price}</td>
                <td>{item.rating === "★★★★★" ? (
                <span className="green">{item.rating}</span>
              ) : item.rating === "★★★★☆" ? (
                <span className="lightgreen">{item.rating}</span>
              ) : item.rating === "★★★☆☆" ? (
                <span className="yellow">{item.rating}</span>
              ) : item.rating === "★★☆☆☆" || item.rating === "★☆☆☆☆" ? (
                <span className="red">{item.rating}</span>
              ) : (
                <span>{item.rating}</span>
              )}</td>
                <td><img src={item.avatar} alt="" /></td>
                <td onClick={() => handleRemoveItem(item.id)}><i class="fa-solid fa-trash"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    
    </div>
    </>
  );
}