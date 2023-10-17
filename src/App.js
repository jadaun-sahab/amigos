import "./App.css";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Beauty from "./Component/Beauty";
import Men from "./Component/Men";
import Women from "./Component/Women"; 
import Contact from "./globle/Contact";
import User from "./AdminComponent/User";
import Manage from "./AdminComponent/Manage";
import Dashboard from "./AdminComponent/Dashboard";
import Addproduct from "./AdminComponent/Addproduct";
import Product from "./AdminComponent/Product";
import Signup from "./globle/Signup";
import UserLogin from "./globle/UserLogin";
import AdminLogin from "./globle/AdminLogin";
import Cart from "./globle/Cart";
import Payform from "./payments/Payform";
import Payoption from "./payments/Payoption";
import Debit from "./payments/Debit";
import Credit from "./payments/Credit";

function App() {
  return (
    <>
        <Router>
      <div className='app'>
          <Sidebar/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/Home" element={<Home/>}></Route>
              <Route exact path="/about" element={ <About/>}></Route>
              <Route exact path="/beauty" element={<Beauty/>}></Route>
             <Route exact path="/men" element={<Men/>}></Route>
             <Route exact path="/women" element={<Women/>}></Route>
             <Route exact path="/Contact" element={<Contact/>}></Route>
             <Route exact path="/addproduct" element={<Addproduct/>}></Route>
             <Route exact path="/user" element={<User/>}></Route>
             <Route exact path="/manage" element={<Manage/>}></Route>
             <Route exact path="/Product" element={<Product/>}></Route>
             <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
             <Route exact path="/userlogin" element={<UserLogin/>}></Route>
             <Route exact path="/signup" element={<Signup/>}></Route>
             <Route exact path="/adminlogin" element={<AdminLogin/>}></Route>
             <Route exact path="/cart" element={<Cart/>}></Route>
             <Route exact path="/Payform" element={<Payform/>}></Route>
             <Route exact path="/Payoption" element={<Payoption/>}></Route>
             <Route exact path="/Debit" element={<Debit/>}></Route>
             <Route exact path="/Credit" element={<Credit/>}></Route>
            </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
