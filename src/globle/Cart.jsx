import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import img from "../img/Cart.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8009/cart")
      .then((response) => {
        setData(response.data);        
      });
  }, []);

  const handleRemoveItem = (itemId) => {
    axios
      .delete(`http://localhost:8009/cart/${itemId}`)
      .then(() => {
        toast.error("Product Deleted")
        setData((prevData) => prevData.filter((item) => item.product.id !== itemId));
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };

  return (
    <>
    <ToastContainer/>
      <div className="cart">
        
        {data && data.length > 0 ? (
          data.map((item) => (
            <tr key={item.product.id}>
              <div className="cartchild2">
                <li>
                  <img src={item.product.avatar} alt="womenFashionImage" />
                </li>
                <li style={{ width: "100%", margin: "8px auto 17px auto" }}>
                  {item.product.title}
                </li>
                <li>
                  Rating &nbsp;
                  {item.product.rating === "★★★★★" ? (
                    <span className="green">{item.product.rating}</span>
                  ) : item.product.rating === "★★★★☆" ? (
                    <span className="lightgreen">{item.product.rating}</span>
                  ) : item.product.rating === "★★★☆☆" ? (
                    <span className="yellow">{item.product.rating}</span>
                  ) : item.product.rating === "★★☆☆☆" ||
                    item.product.rating === "★☆☆☆☆" ? (
                    <span className="red">{item.product.rating}</span>
                  ) : (
                    <span>{item.product.rating}</span>
                  )}
                </li>
                <li>
                  <BiRupee />
                  Price - {item.product.price}
                </li>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </tr>
          ))
        ) : (
          <div className="emptycart">
            <p className="cartheading">No items in the cart !</p>
            <img src={img} alt="" />
          </div>
        )}
      </div>
      {data.length > 0 ? (
        <Link to="/Payform" className="buy-now-enabled buy-now" style={{textDecoration:"none"}}>Buy Now</Link>
        ) : (
        <div className="buy-now-disabled buy-now">Buy Now</div>
      )}
    </>
  );
}
