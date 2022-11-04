import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Electronics from "./ElectronicsPage/Electronics";
import WomenClothesPage from "./WomenClothesPage/WomenClothesPage";
import JeweleryPage from "./Jewelery/JeweleryPage";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import MenClothesPage from "./MenClothesPage/MenClothesPagePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/WomenClothes",
    element: <WomenClothesPage />,
  },

  {
    path: "/Jewelery",
    element: <JeweleryPage />,
  },
  {
    path: "/Categories",
    element: <CategoriesPage />,
  },
  {
    path: "/MenClothes",
    element: <MenClothesPage />,
  },
  {
    path: "/Electronics",
    element: <Electronics />,
  },
]);
// ReactDOM.render(<App />).document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
