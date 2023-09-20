import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { FcCalendar } from 'react-icons/fc';

export default function AddProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  
  const[status,setStatus] = useState();

  useEffect(() => {
    axios.get('http://localhost:8005/database') 
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [status]);
 
  const handleChangeStatus = (id, newStatus) => {
    setStatus(newStatus);
    let obj ={ "status" : newStatus}
    axios.patch(`http://localhost:8005/database/${id}`,obj)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
   };


   if (loading) {
     return <p>Loading...</p>;
   }


  return (
    <>
    <div className='addproduct'>
    <table>
      <thead >
          <th>USER</th>
          <th>ORDER DATE</th> 
          <th>PRICE</th>
          <th>STATUS</th>
      </thead>
      <tbody  >
     
        {data.map(item => (
          <tr key={item.id}>
            <td><FaUserTie/> {item.user }</td>
            <td><FcCalendar/>{item.orderdate}</td>
            <td><BsCurrencyRupee/>{item.price}</td>
            <td><StatusMenu row={item} onChangeStatus={handleChangeStatus} /></td>
          </tr>
        ))}
      </tbody>
    </table>
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
