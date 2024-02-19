import React from 'react'
import { CartProvider } from './cartContext'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Cart from './Cart';
import Details from './Details';

function App() {
  return (
    <div>
       <CartProvider>
      < BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Details/>} />
        </Routes>
      </ BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App