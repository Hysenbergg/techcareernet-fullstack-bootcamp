import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          justifyContent: "space-around",
          listStyle: "none",
          fontSize: "24px",
        }}
      >
        <li>
          <Link to="/">Products Page</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites Page</Link>
        </li>
      </ul>
        <hr style={{
          border: '1px solid gray',
          width: '100%',
        }} />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
