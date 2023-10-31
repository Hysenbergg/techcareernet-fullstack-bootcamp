import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button } from "@mui/material";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  };

  const productDelete = (id) => {
    axios
      .delete(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => {
        fetchProducts();
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Product Name", width: 400 },
    { field: "unitPrice", headerName: "Unit Price", width: 200, },
    {
      field: "unitsInStock",
      headerName: "Stock",
      width: 200,
      cellClassName: (params) => (params.value === 0 ? "red-text" : ""),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          onClick={() => productDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <DataGrid columns={columns} rows={products}  />
    </div>
  );
}

export default App;
