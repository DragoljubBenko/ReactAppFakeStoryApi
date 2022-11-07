import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../MenClothesPage/index.css";
function MenClothesPage() {
  const [menClothes, setMenClothes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setMenClothes(json);
      });
  }, []);
  if (loading) {
    return <div className="mainContainerMenClothes">...Almoust there ♥</div>;
  }
  return (
    <>
      {" "}
      <p>
        <h1>MenClothesPage</h1>
      </p>
      <div className="mainContainerMenClothes">
        {menClothes.map((item) => {
          return (
            <div className="menClothesItem">
              {/* <div className=" menClothesItemID"> {item.id}</div> */}
              <div className="menClothesItemTitle"> {item.title}</div>
              <img className="menClothesItemImg" src={item.image} alt="" />

              <div className="menClothesItemTitle"> {item.description}</div>
              <div className="priceMenClothes">Price: {item.price} $</div>
            </div>
          );
        })}{" "}
        <div className="footerContainerMenClothes">
          {" "}
          <Link to={"/"}>
            <button>Click here to go to mainApp?</button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
}

export default MenClothesPage;
