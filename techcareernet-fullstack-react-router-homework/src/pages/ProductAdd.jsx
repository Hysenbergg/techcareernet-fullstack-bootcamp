import axios from "axios";
import React, { useState } from "react";

function ProductAdd() {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitsInStock, setUnitInStock] = useState("");

  const addProduct = () => {

    var newProduct = {
      name,
      unitPrice,
      unitsInStock,
    };

    axios
      .post("https://northwind.vercel.app/api/products" + newProduct)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Unit Price</label>
        <input
          type="number"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Unit In Stock</label>
        <input
          type="number"
          value={unitsInStock}
          onChange={(e) => setUnitInStock(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addProduct}>Add</button>
      </div>
    </>
  );
}

export default ProductAdd;
