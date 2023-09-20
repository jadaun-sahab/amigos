import * as React from 'react';
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
import { GiHeartEarrings } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { RiWomenFill } from 'react-icons/ri';
import { RiMenLine } from 'react-icons/ri';
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


export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen); 
  };

 
 
  return (
    <Box sx={{ display: 'flex' }} >
    <CssBaseline />
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{bgcolor:"#191d45"}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2, ...(open) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" >AMIGOS</Typography>
        <Typography sx={{position:"absolute",right:"28px", fontSize:"25px"}}>
          <Link to="/cart"><FaShoppingCart/></Link>
          </Typography>
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
        <li><Link to="/home"><AiFillHome className='homeicon'/>HOME</Link></li>
        <li><Link to="/About"><MdFeedback className='homeicon'/>ABOUT </Link></li>
        <li><Link to="/beauty"><GiHeartEarrings className='homeicon'/>BEAUTY </Link></li>
        <li><Link to="/women"><RiWomenFill className='homeicon'/>WOMEN </Link></li>
        <li><Link to="/men"><RiMenLine className='homeicon'/>MEN </Link></li>
        <li><Link to="/contact"><BiSolidContact className='homeicon'/>CONTACT</Link></li>
        <li><Link to="/addproduct"><BiSolidContact className='homeicon'/>add</Link></li>
      </List>
      
      <Divider />
      
    </Drawer>
   
  </Box>
);
}