import { Box } from "@mui/material";
import React from "react";
import img from "../img/store.gif";
import img1 from "../img/homeimg1.jpg";
import img2 from "../img/homeimg2.png";
import img3 from "../img/homeimg3.png";
import img4 from "../img/homeimg4.jpg";
import img5 from "../img/homeimg5.png";
import img6 from "../img/homeimg6.jpg";


export default function Home() {
  return (
    <div className="home">
      <Box>
        <h1 style={{fontWeight:"400",fontSize:"4rem",margin:"25px"}}>Welcome To Amigos Store</h1>
        <img style={{marginBottom:"6em"}} src={img} alt="homeimg" />
        <hr />
      </Box>
      <div className="homechild1">
        <h2>"Discover Endless Delights at Amigos E-commerce Store"</h2>
        <p>Welcome to Amigos E-commerce Store, your one-stop destination for all your shopping needs. At Amigos, we pride ourselves on offering a wide range of high-quality products carefully curated to cater to your diverse tastes and preferences. Whether you're searching for the latest fashion trends, tech gadgets, home decor, or unique gifts, we've got you covered. Our user-friendly website is designed to provide you with a seamless and enjoyable shopping experience. We prioritize customer satisfaction and offer competitive prices, secure payment options, and efficient shipping and delivery services. Our commitment to excellence extends to our customer support team, who are always ready to assist you with any questions or concerns. Join our ever-growing community of happy shoppers and discover the convenience and reliability that Amigos E-commerce Store has to offer. Your satisfaction is our priority, and we look forward to being your trusted online shopping companion.</p>
      </div>
      <hr />
      <div className="homechild2">
        <div className="homechildbox">
          <h3>Your Store</h3>
          <img src={img1} alt="homeimg" />
          <p>Please Visit Once</p>
        </div>
        <div className="homechildbox">
          <h3>Shop Here</h3>
          <img src={img2} alt="homeimg" />
          <p>Please Visit Once</p>
        </div>
        <div className="homechildbox">
          <h3>All Beauty Product</h3>
          <img src={img3} alt="homeimg" />
          <p  >Please Visit Once</p>
        </div>
        <div className="homechildbox">
          <h3>50% Discount </h3>
          <img src={img4} alt="homeimg" />
          <p>Please Visit Once</p>
        </div>
        <div className="homechildbox">
          <h3>Come To Our Website</h3>
          <img src={img5} alt="homeimg" />
          <p>Please Visit Once</p>
        </div>
        <div className="homechildbox">
          <h3>Circle Of Ecom.</h3>
          <img src={img6} alt="homeimg" />
          <p>Please Visit Once</p>
        </div>
      </div>
     <div className='footer'>
     <p>All Rights Are Reserved To JadaunSahab</p>
   </div>
    </div>
  );
}
