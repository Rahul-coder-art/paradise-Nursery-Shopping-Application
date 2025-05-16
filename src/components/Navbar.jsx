import React from "react";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>Paradise Nursery</h1>
      <div className="cart-info">
        <span>🛒 Cart: {cartCount}</span>
      </div>
    </nav>
  );
}
