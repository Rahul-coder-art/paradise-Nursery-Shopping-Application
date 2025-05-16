import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

const plantsData = [
  { id: 1, name: "Fiddle Leaf Fig", price: 25, img: "https://i.imgur.com/u6p4r5P.jpg" },
  { id: 2, name: "Snake Plant", price: 18, img: "https://i.imgur.com/TCAXrWn.jpg" },
  { id: 3, name: "Peace Lily", price: 22, img: "https://i.imgur.com/5hXoBrv.jpg" },
  { id: 4, name: "Spider Plant", price: 15, img: "https://i.imgur.com/9JzZ5rv.jpg" },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    if (!cartItems.find((item) => item.id === plant.id)) {
      setCartItems([...cartItems, plant]);
    }
  };

  const removeFromCart = (plantId) => {
    setCartItems(cartItems.filter((item) => item.id !== plantId));
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <div className="container">
        <PlantList plants={plantsData} addToCart={addToCart} />
        <Cart items={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
