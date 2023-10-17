import  React , { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AiFillHome } from 'react-icons/ai';
import { MdFeedback } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { GiHeartEarrings } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { RiWomenFill } from 'react-icons/ri';
import { RiMenLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export default function Sidebar(props) {
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen); 
  };
 
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
 
  return (
    <>
 
    <Box sx={{ display: 'flex' }} >
    
    <CssBaseline />
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{bgcolor:"#191d45"}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2, ...(open),zIndex:"50" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography  sx={{cursor:"pointer"}} variant="h6" noWrap component="div"  ><Link to="/home" style={{textDecoration:"none"}}>AMIGOS</Link></Typography>
        <Typography sx={{ margin:"0 auto",display:"block",fontSize:"20px"}}>
          {props.title}
        </Typography>
        <Typography sx={{position:"absolute",right:"62px", fontSize:"25px",cursor:"pointer"}}
        onClick={handleClick}>
        <BiUserCircle />
        </Typography>
        <Typography sx={{position:"absolute",right:"28px", fontSize:"25px"}}>
          <Link to="/cart"><FaShoppingCart/></Link>
        </Typography>
        {isOpen && (
        <div className="menu">
          <ul>
          <Link to="userlogin"><li onClick={handleClose}>Login as User <FaUsers fontSize={"20px"}/></li></Link>
          <Link to="adminlogin"> <li onClick={handleClose}>Login as Admin <RiAdminFill fontSize={"20px"}/></li></Link>
          </ul>
        </div>
      )}
      </Toolbar>
    </AppBar>
    <Drawer 
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      
      <Divider/>
      <List className='sidebar'>
        <li><Link to="/home"><AiFillHome className='homeicon adminicon'/>HOME</Link></li>
        <li><Link to="/About"><MdFeedback className='homeicon adminicon'/>ABOUT </Link></li>
        <li><Link to="/beauty"><GiHeartEarrings className='homeicon adminicon'/>BEAUTY </Link></li>
        <li><Link to="/women"><RiWomenFill className='homeicon adminicon'/>WOMEN </Link></li>
        <li><Link to="/men"><RiMenLine className='homeicon adminicon'/>MEN </Link></li>
        <li><Link to="/contact"><BiSolidContact className='homeicon adminicon'/>CONTACT</Link></li>
      </List>
      
      <Divider />
      
    </Drawer>
   
  </Box>
  
</>
);
}