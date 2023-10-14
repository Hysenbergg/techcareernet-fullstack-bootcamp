import "./App.css";
import {productData} from "./data/Data";

function App() {
  return (
    <table className='w3-table w3-striped'>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>City</td>
          <td>Country</td>
          <td>Postal Code</td>
        </tr>
      </thead>
      <tbody>
        {
          productData && productData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.address.city}</td>
              <td>{item.address.country}</td>
              <td>{item.address.postalCode}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default App;
