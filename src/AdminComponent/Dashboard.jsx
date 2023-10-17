import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { FcCalendar } from 'react-icons/fc';
import Adminsidebar from './Adminsidebar';
import Sidebar from '../Component/Sidebar';
import { BsCartCheckFill } from 'react-icons/bs';
import {  FaUserFriends } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const[status,setStatus] = useState(); 

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

  useEffect(() => {
    axios.get('https://jadaun-sahab.github.io/product_api/product.json') 
      .then(response => {
        setData2(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  const handleChangeStatus = (id, newStatus) => {
    setStatus(newStatus);
    let obj ={ "status" : newStatus}
    axios.patch(`http://localhost:8004/data/${id}`,obj)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
   };

  return (
    <>
    <Sidebar title="DASHBOARD"/>
    <div className='admin'>
      <div className='adminchild1'>
      <Adminsidebar/>
      </div>
      <div className='adminchild2'>

       <div className="boxs">
            <div className="box1 boxcss">
                  <div className='boxchild1'>
                    <i className='cart-shopping'><BsCartCheckFill/></i>
                  </div>
                  <div className='boxchild2'>
                    <h3>{data2.length}</h3>
                    <p>Products</p>
                  </div>
            </div>
            <div className="box2 boxcss">
                <div className='boxchild1'>
                    <i className="users"><FaUserFriends/></i>
                </div>
                <div className='boxchild2'>
                    <h3>{data.length}</h3>
                    <p>Users</p>
                </div>
            </div>
            <div className="box3 boxcss">
                <div className='boxchild1'>
                      <i className="truck"><FaTruck/></i>
                  </div>
                  <div className='boxchild2'>
                      <h3>43</h3>
                      <p>Orders</p>
                  </div>
            </div>
      </div>
      
      <div className='addproduct'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>ORDER DATE</th> 
                <th>PRICE</th> 
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td><FaUserTie color='rgb(43, 44, 98)'/> {item.user }</td>
                  <td><FcCalendar/>{item.orderdate}</td>
                  <td><BsCurrencyRupee/>{item.price}</td> 
                  <td ><StatusMenu  row={ item} onChangeStatus={handleChangeStatus} /></td>
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


function StatusMenu({ row, onChangeStatus }) {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
   
     const handleClick = () => {
       setIsMenuOpen(true);
     };
   
     const handleClose = () => {
       setIsMenuOpen(false);
     };
   
     const handleStatusChange = (status) => {
       onChangeStatus(row.id, status);
       handleClose();
     };
   
     return (
      
       <div className="status-menu">
         <button  className="status-button" onClick={handleClick}>
           {row.status}
         </button>
         {isMenuOpen && (
           <div className="status-options">
             <button onClick={() => handleStatusChange('Not started')}>Not started</button>
             <button onClick={() => handleStatusChange('PENDING')}>Pending</button>
             <button onClick={() => handleStatusChange('In Progress')}>InProgress</button>
             <button onClick={() => handleStatusChange('Completed')}>Completed</button>
           </div>
         )}
       </div>
     );
   }
