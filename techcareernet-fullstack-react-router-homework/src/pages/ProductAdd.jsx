import axios from "axios";
import React, { useState } from "react";

function ProductAdd() {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitsInStock, setUnitInStock] = useState("");

  const addProduct = () => {
    if (name === "" || unitPrice === "" || unitsInStock === "") {
      return;
    }

    var newProduct = {
      name: name,
      unitPrice: unitPrice,
      unitsInStock: unitsInStock,
    };

    axios
      .post("https://northwind.vercel.app/api/products", newProduct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div style={{ marginBottom: "50px",display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Unit Price: </label>
          <input
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Unit In Stock: </label>
          <input
            type="number"
            value={unitsInStock}
            onChange={(e) => setUnitInStock(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={addProduct}>Add</button>
      </div>
    </div>
  );
}

export default ProductAdd;
