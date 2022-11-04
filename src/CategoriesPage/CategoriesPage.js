import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import logo from "../AccesoriesPage/OIP.jpg";
// import Belts from "../AccesoriesBeltsPage/Belts";

function AccesoriesPage() {
  const [postNav, setNavPostArray] = useState([]);
  useEffect(() => {
    fetch("https:fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "vtorTest");
        setNavPostArray(json);
      });
  }, []);
  return (
    <div className="bodyCategories">
      <div>
        <h1 className="styleHeadline">I came to Categories Page</h1>{" "}
      </div>
      <div>
        <h3 className="styleHeadline">List of CATEGORIES PRODUCTS</h3>
      </div>
      <div>
        {" "}
        <div className="mainContainerCAtegoriesPage">
          {postNav.map(() =>
            // item e nadvor od mapFUNKCIJA deka SE odi direktno na dadenata
            // strana nema potreba da gi pisuva po kategorii dodadeni se kopcinja
            // za toa da se isvrsi
            // item

            {
              return (
                <div className="Categories">
                  {/* //tuka e iskomentiran item zaradi situacijata pogore */}
                  <div className="item">{/* {item} */}</div>
                  {/* <div>{item.index}</div> */}
                  {/* <img src={item.image} alt="" /> */}
                </div>
              );
            }
          )}
        </div>{" "}
      </div>
      <div className="itemButtons">
        <button className="Categories">Search for Electronics</button>
        <Link to={"/Jewelery"}>
          <button className="Categories">Search for Jewelery</button>
        </Link>{" "}
        <button className="Categories">Search for Men's Clothing</button>
        <button className="Categories">Search for Women's Clothing</button>
      </div>
      <div className="styleHeadlineButton">
        Click here to go BACK All PRODUCTS (home) page ??{" "}
        <Link to={"/"}>
          <button>Back to mainApp</button>
        </Link>{" "}
      </div>
    </div>
  );
}
export default AccesoriesPage;
// const router = createBrowserRouter([
//   {
//     path: "/Belts",
//     element: <Belts />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
