import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductAdd from './pages/ProductAdd';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/addproduct' element={<ProductAdd />} />
      </Routes>
    </>
  );
}

export default App;
