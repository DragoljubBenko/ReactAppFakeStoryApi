import React from "react";
import { Link } from "react-router-dom";

function Electronics() {
  return (
    <div>
      Electronics
      <div>Click here to go BACK All PRODUCTS (home) page ?? </div>
      <Link to={"/"}>
        <button>Back to mainApp</button>
      </Link>{" "}
    </div>
  );
}

export default Electronics;
