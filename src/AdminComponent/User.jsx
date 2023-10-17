import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
// import { BsCurrencyRupee } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { FcCalendar } from 'react-icons/fc';
import Adminsidebar from './Adminsidebar';
import Sidebar from '../Component/Sidebar';

export default function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jadaun-sahab.github.io/dashboard_api/dashboard.json';
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
    <Sidebar title="USERS"/>
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
              <th>USER</th>
              <th>ORDER DATE</th> 
              <th>ADDRESS</th>
              <th>CONTACT</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody  >
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><FaUserTie color='#75ace3fd'/> {item.user }</td>
                <td><FcCalendar/>{item.orderdate}</td>
                <td>{item.address}</td>
                <td>{item.contact}</td>
                <td>{item.user+item.id}@gmail.com</td>
              </tr>
            ))}
          </tbody>
    </table>
  </div>
      </div>
    </div>
    
    </>
  );
}