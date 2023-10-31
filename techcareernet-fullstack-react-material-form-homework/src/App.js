import React from "react";
import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const productValidationSchema = Yup.object().shape({
  productName: Yup.string()
    .min(3, "Product name information cannot be less than 3 characters.")
    .max(50, "Product name information cannot be greater than 50 characters")
    .required("Product name information cannot be left blank."),
  stock: Yup.number().required(
    "Products stock information cannot be left blank."
  ),
  unitPrice: Yup.number().required(
    "Unit Price information cannot be left blank."
  ),
  quentityPerUnit: Yup.string().required(
    "Quentity Per Unit information cannot be left blank."
  ),
});

function App() {
  const formik = useFormik({
    initialValues: {
      productName: "",
      stock: "",
      unitPrice: "",
      quentityPerUnit: "",
    },
    validationSchema: productValidationSchema,
    onSubmit: (values) => {
      addProducts(values);
    },
  });

  const addProducts = (data) => {
    console.log(data);
  };

  return (
    <form
      style={{
        padding: "25px",
      }}
      onSubmit={formik.handleSubmit}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Add Product Page
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <label>Name</label>
            <input
              name="productName"
              id="productName"
              onChange={formik.handleChange}
              value={formik.values.productName}
            />
            {formik.errors.productName ? <span style={{color: 'red'}}>{formik.errors.productName}</span> : ""}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <label>Stock</label>
            <input
              name="stock"
              id="stock"
              onChange={formik.handleChange}
              value={formik.values.stock}
            />
            {formik.errors.stock ? <span style={{color: 'red'}}>{formik.errors.stock}</span> : ""}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <label>Unit Price</label>
            <input
              name="unitPrice"
              id="unitPrice"
              onChange={formik.handleChange}
              value={formik.values.unitPrice}
            />
            {formik.errors.unitPrice ? <span style={{color: 'red'}}>{formik.errors.unitPrice}</span> : ""}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <label>Quentity Per Unit</label>
            <input
              name="quentityPerUnit"
              id="quentityPerUnit"
              onChange={formik.handleChange}
              value={formik.values.quentityPerUnit}
            />
            {formik.errors.quentityPerUnit ? <span style={{color: 'red'}}>{formik.errors.quentityPerUnit}</span> : ""}
          </div>
        </Grid>
        <Grid xs={12} style={{ marginTop: "25px", marginLeft: "25px"}}>
          <div>
            <Button variant="contained" type="submit">Add</Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

export default App;
