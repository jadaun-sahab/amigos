import "./App.css";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Beauty from "./Component/Beauty";
import Men from "./Component/Men";
import Women from "./Component/Women"; 
import AddProduct from "./Component/AddProduct";
import Contact from "./Component/Contact";

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
             <Route exact path="/addproduct" element={<AddProduct/>}></Route>
            </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
