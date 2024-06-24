// src/components/Checkout.js
import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Address</label>
          <input type="text" />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;