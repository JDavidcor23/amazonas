import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/shopping_cart" element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
