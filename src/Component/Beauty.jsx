import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiRupee } from 'react-icons/bi';

export default function Beauty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/beauty")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="beauty">
      {data.map((item) => (
        <tr key={item.id}>
          <div className="beautychild">
          <li style={{width:"60%",margin:"auto"}}>{item.title}</li>
          <li><img src={item.avatar} alt="" /></li>
          <li>Rating &nbsp; &nbsp;{item.rating}</li>
          <li><BiRupee/>{item.price}</li>
          <li><button>Add TO CART</button></li>
          </div>
        </tr>
        
      ))}
    </div>
  );
}
