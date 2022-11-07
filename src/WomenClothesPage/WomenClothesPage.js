import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../WomenClothesPage/index.css";
// import logo from "../ClothesPage/clothes.jpg";
function WomenClothesPage() {
  const [womenClothes, setWomenClothes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);

        setWomenClothes(json);
      });
  }, []);
  const { ClothesPageId } = useParams();
  console.log(ClothesPageId);
  if (loading) {
    return <div className="mainContainerJewelery">...Almoust there ♥</div>;
  }
  return (
    <div>
      <div>
        <h1>WOMEN'S Clothes Page</h1>{" "}
      </div>
      <div className="mainContainerWomenClothes">
        {womenClothes.map((item) => {
          return (
            <div className="womenClothesItem">
              <div className="womenClothesItemID"> {item.id}</div>
              <div className="womenClothesTitle"> {item.title}</div>
              <div className="womenClothesDesc"> {item.description}</div>

              <img className="womenClothesItemImg" src={item.image} alt="" />

              <div className="womenClothesPrice">Price: {item.price} $</div>
            </div>
          );
        })}{" "}
        {/* <div className="logoClothes"></div> */}
        {/* <img src={logo} alt="Logo" /> */}
        <div className="footerContainerWomenClothes">
          {" "}
          <Link to={"/"}>
            <button> Click here to go to mainApp?</button>
          </Link>{" "}
          {
            <div className="moveToJewelery">
              <Link to={"/Jewelery"}>
                <button> Click here to go Jewelery Page?</button>
              </Link>{" "}
            </div>
          }{" "}
        </div>
      </div>
    </div>
  );
}

export default WomenClothesPage;
