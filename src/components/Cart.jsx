import React from "react";

export default function Cart({ items, removeFromCart }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>No plants added yet.</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && <h3>Total: ${total}</h3>}
    </div>
  );
}
