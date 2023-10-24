import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          gap: "20px"
        }}
      >
        <Link to="/products">Product List</Link>
        <Link to="/addproduct">Add Product</Link>
      </div>

      <h1 style={{ marginTop: "50px" }}> HomePage </h1>
    </div>
  );
}

export default HomePage;
