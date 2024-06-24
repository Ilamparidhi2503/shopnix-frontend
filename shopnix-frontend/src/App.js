// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: '$10' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: '$20' },
    // Add more products as needed
  ]);

  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <ProductList products={products} />
      <Cart cartItems={cartItems} />
      <Checkout />
    </div>
  );
}

export default App;
