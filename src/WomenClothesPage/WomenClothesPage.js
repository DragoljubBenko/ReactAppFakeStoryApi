import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
// import logo from "../ClothesPage/clothes.jpg";
function WomenClothesPage() {
  const [womenClothes, setWomenClothes] = useState([]);
  useEffect(() => {
    // treba da se najde koj e patekata za WOMEN clothes
    fetch("https:fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "vtorTest");
        setWomenClothes(json);
      });
  }, []);
  const { ClothesPageId } = useParams();
  console.log(ClothesPageId);
  return (
    <div>
      <div className="mainContainerWomenClothes">
        {womenClothes.map((item) => {
          return (
            <div>
              <div className="item"> {item}</div>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>{" "}
      <div className="backPage"> I came to WOMEN'S Clothes Page </div>
      <div className="logoClothes"></div>
      {/* <img src={logo} alt="Logo" /> */}
      <div>
        Click here to go BACK All PRODUCTS (home) page ??{" "}
        <Link to={"/"}>
          <button>Back to mainApp</button>
        </Link>{" "}
      </div>
      {
        <div>
          Click here to go Jewelery Page
          <Link to={"/Jewelery"}>
            <button>here</button>
          </Link>{" "}
        </div>
      }
    </div>
  );
}

export default WomenClothesPage;
