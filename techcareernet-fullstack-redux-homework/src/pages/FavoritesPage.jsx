import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const removedProduct = (id) => {
    dispatch({
      type: "FAVORITES_REMOVE",
      payload: Number(id),
    });
  };

  return (
    <div
      style={{
        width: "40%",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Favorites</h1>

      {favorites &&
        favorites.map((item) => (
          <div
            key={item.id}
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
            <h1>{item.name}</h1>
            <button
              onClick={() => removedProduct(item.id)}
              style={{
                border: "none",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingLeft: "12px",
                paddingRight: "12px",
                backgroundColor: "red",
                borderRadius: "8px",
                color: "white",
              }}
            >
              Remove Product
            </button>
          </div>
        ))}
    </div>
  );
}

export default FavoritesPage;
