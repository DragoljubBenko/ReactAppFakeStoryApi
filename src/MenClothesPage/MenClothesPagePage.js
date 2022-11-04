import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MenClothesPage() {
  const [menClothes, setMenClothes] = useState([]);
  useEffect(() => {
    // treba da se najde koj e patekata za MEN clothes
    fetch("https:fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "vtorTest");
        setMenClothes(json);
      });
  }, []);

  return (
    <div>
      <div className="mainContainerMenClothes">
        {menClothes.map((item) => {
          return (
            <div>
              <div className="item"> {item}</div>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>{" "}
      MenClothesPage
      <div>
        Click here to go BACK All PRODUCTS (home) page ??{" "}
        <Link to={"/"}>
          <button>Back to mainApp</button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default MenClothesPage;
