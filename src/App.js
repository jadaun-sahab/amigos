import { Link } from "@mui/material";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";

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
              {/* <Route exact path="/About" element={<About/>}></Route> */}
             
            </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
