import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Beauty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jadaun-sahab.github.io/beauty_api/beauty.json';

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToCart = (product) => {
    axios
      .post("http://localhost:8009/cart", { product })
      .then((response) => {
        toast("Product Added To The Cart Successfully");
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  return (
    <>
    <div className="beauty">
      {data.map((item) => (
        <div key={item.id}>
          <div className="beautychild">
            <li style={{ width: "100%", margin: "8px auto 17px auto" }}>
              {item.title}
            </li>
            <li>
              <img src={item.avatar} alt="beautyFashionImage" />
            </li>
            <li>
              Rating &nbsp; &nbsp;
              {item.rating === "★★★★★" ? (
                <span className="green">{item.rating}</span>
              ) : item.rating === "★★★★☆" ? (
                <span className="lightgreen">{item.rating}</span>
              ) : item.rating === "★★★☆☆" ? (
                <span className="yellow">{item.rating}</span>
              ) : item.rating === "★★☆☆☆" || item.rating === "★☆☆☆☆" ? (
                <span className="red">{item.rating}</span>
              ) : (
                <span>{item.rating}</span>
              )}
            </li>
            <li>
              <BiRupee />
              {item.price}
            </li>
            <li>
              <button onClick={() => addToCart(item)}  onClickCapture={addToCart}>Add TO CART</button>
            </li>
          </div>
        </div>
      ))}
    </div>
    <ToastContainer   />
   
    </>
  );
}
