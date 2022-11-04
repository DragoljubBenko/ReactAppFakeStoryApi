// import { Form, json, Link } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import React, { useEffect, useState } from "react";
import "../src/index.css";
import Footer from "./Footer";
function App() {
  const [post, setPostArray] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json, "test");
        setPostArray(json);
      });
  }, []);

  return (
    <>
      <div className="Navbar">
        <h1>*FAKE API STORE*</h1>
        <Outlet> </Outlet>

        <div className="NavbarContainer">
          <Link to="/Electronics">
            {" "}
            <button className="buttons">Electronics</button>
          </Link>{" "}
          <Link to="/MenClothes">
            {" "}
            <button className="buttons">Men's Clothes </button>
          </Link>{" "}
          <div>
            {" "}
            <Link to="/WomenClothes">
              {" "}
              <button className="buttons">Women's Clothes</button>
            </Link>{" "}
          </div>
          <div>
            <Link to="/Jewelery">
              <button className="buttons"> Jewelery </button>{" "}
            </Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/Categories">
              {" "}
              <button className="buttons">CATEGORIES</button>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="mainContainer">
        {post.map((item) => {
          return (
            <div className="box">
              <div className="id"> {item.id}</div>
              <div className="title"> {item.title}</div>
              <div className="category">{item.category}</div>
              <div className="description">{item.description}</div>
              <img className="img" src={item.image} alt="" />
              <div className="price">{item.price}</div>{" "}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export default App;
