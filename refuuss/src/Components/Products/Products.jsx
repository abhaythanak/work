import React from 'react';
import Product from './Product';

export default function Products() {
    const products = [
        { title: "Tech Gadget", description: "Discover the latest in technology with our new gadget. Perfect for tech enthusiasts!", live: true, class: false },
        { title: "Fitness Tracker", description: "Keep track of your health and fitness with our state-of-the-art fitness tracker.", live: true, class: true },
        { title: "Smart Home", description: "Turn your home into a smart home with our innovative devices.", live: true, class: false },
        { title: "Wireless Earbuds", description: "Experience high-quality sound with our new wireless earbuds.", live: true, class: false },
        { title: "Gaming Console", description: "Dive into immersive gaming with our latest gaming console.", live: true, class: false }
      ];

  return (
    <div className="container mx-auto px-4">
      {products.map((val, index) => (
        <Product key={index} val={val} />
      ))}
    </div>
  );
}
