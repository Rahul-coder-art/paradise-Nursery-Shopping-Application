import React from "react";

export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <img src={plant.img} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}
