import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Jewelery/index.css";
// import logo from "../ShoesPage/best-running-shoes-lead-1576249557.jpg";
function ShoesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https:fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setCategories(json);
      });
  }, []);
  if (loading) {
    return <div className="mainContainerJewelery">...Almoust there ♥</div>;
  }
  return (
    <div>
      <h1>Jewelery </h1>
      <div className="mainContainerJewelery">
        {categories.map((item) => {
          return (
            <div className="jeweleryBox">
              <div className=" jeweleryID"> {item.id}</div>
              <div className="jeweleryTitle">{item.title}</div>{" "}
              <img className="jeweleryiImage" src={item.image} alt="" />
              <div className="jeweleryTitle"> {item.description} </div>
              <div className="priceJewelery">Price: {item.price} $</div>
            </div>
          );
        })}
        <div className="jeweleryFooter">
          {" "}
          <Link to={"/"}>
            <button>Click here to go to mainApp?</button>
          </Link>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default ShoesPage;
