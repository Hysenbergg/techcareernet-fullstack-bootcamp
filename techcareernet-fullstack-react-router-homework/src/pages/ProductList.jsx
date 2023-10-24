import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const deleteProduct = (id) => {
    setLoading(true);
    axios
      .delete(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => {
        getProducts();
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitsInStock}</td>
                    <td>
                      <button onClick={() => deleteProduct(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProductList;
