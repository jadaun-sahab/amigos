import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { AiFillHome } from 'react-icons/ai';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaChartPie } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { TbLogout2 } from 'react-icons/tb';
import { PiUserListBold } from 'react-icons/pi';
import { BiSolidBox } from 'react-icons/bi';
import { List } from '@mui/material';

export default function Adminsidebar() {
  const [sidebarWidth, setSidebarWidth] = useState('240px'); 
  const [textVisible, setTextVisible] = useState('visible');
  const handleWidthChange = () => {
    const newWidth = sidebarWidth === '240px' ? '60px' : '240px';
    const newDisplay = textVisible === 'visible' ? 'hidden' : 'visible';
    setSidebarWidth(newWidth);
    setTextVisible(newDisplay);
  };
  return (
    <div>
       <List style={{ width: sidebarWidth }} className='adminsidebar1'>
        <li className='homeicon adminicon'><i className="fa-solid fa-ellipsis-vertical" onClick={handleWidthChange}></i> </li>
      </List>
      <List  style={{ width: sidebarWidth }} className='adminsidebar'>
        <li><Link to="/Dashboard"><BiSolidDashboard className='homeicon adminicon'/><span style={{visibility:textVisible}}>DASHBOARD</span></Link></li>
        <li><Link to="/user"><PiUserListBold className='homeicon adminicon'/><span style={{visibility:textVisible}}>USER</span></Link></li>
        <li><Link to="/product"><BiSolidBox className='homeicon adminicon'/><span style={{visibility:textVisible}}>PRODUCTS</span></Link></li>
        <li><Link to="/manage"><FaChartPie className='homeicon adminicon'/><span style={{visibility:textVisible}}>Manage Product</span></Link></li>
        <li><Link to="/AddProduct"><FaPlus className='homeicon adminicon'/><span style={{visibility:textVisible}}>Add Product</span> </Link></li>
      </List>
      <List  style={{ width: sidebarWidth }} className='adminsidebar2'>
        <li><Link to="/home"><TbLogout2 className='homeicon adminicon'/><span style={{visibility:textVisible}}>Log Out</span></Link></li>
      </List>
    </div>
  )
}
