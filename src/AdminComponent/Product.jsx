import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import Adminsidebar from './Adminsidebar';
import Sidebar from '../Component/Sidebar';

export default function Product() {
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
 

  return (
    <>

<Sidebar title="PRODUCT"/>
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
              <th>RATING</th>
              <th>PRICE</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody  >
          {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><FaUserTie color='rgb(43, 44, 98)'/> {item.title }</td>
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
                <td><BsCurrencyRupee/>{item.price}</td>
                <td><img src={item.avatar} alt="" /></td>
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