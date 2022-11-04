import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Jewelery/index.css";
// import logo from "../ShoesPage/best-running-shoes-lead-1576249557.jpg";
function ShoesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https:fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "test");
        setCategories(json);
      });
  }, []);
  return (
    <div>
      <h1>I came to CATEGORIES/jewelery App page</h1>
      <div className="mainContainerJewelery">
        {categories.map((item) => {
          return (
            <div className=" jeweleryiImageTitleItem">
              <div> {item.id}</div>
              <div className="jeweleryiImageTitleItem">
                <img src={item.image} alt="" />
              </div>
              <div className="jeweleryiImageTitleItem">{item.title}</div>{" "}
            </div>
          );
        })}
      </div>

      {/* <img src={logo} alt="Logo" /> */}

      <div className="margin">
        Click here to go BACK to APPPAGE(home) page ??{" "}
        <Link to={"/"}>
          <button>Back to mainApp</button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default ShoesPage;
