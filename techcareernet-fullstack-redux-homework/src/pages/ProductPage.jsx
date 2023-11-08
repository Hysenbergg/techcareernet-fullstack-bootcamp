import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const handleFavoritesAdd = (item) => {
    console.log(item);
    dispatch({
      type: "FAVORITES_ADD",
      payload: item,
    });
  };

  return (
    <div
      style={{
        width: "40%",
      }}
    >
      <h1 style={{textAlign: 'center', marginBottom: '25px'}}>Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "lightgray",
            marginBottom: "25px",
            justifyContent: "space-between",
            paddingRight: "10px",
            paddingLeft: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <button
            onClick={() => handleFavoritesAdd(product)}
            style={{
              border: "none",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              backgroundColor: "green",
              borderRadius: "8px",
              color: "white",
            }}
          >
            Favorites Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
