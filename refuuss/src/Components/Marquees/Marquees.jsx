import React from 'react';
import Marquee from './Marquee';

export default function Marquees() {
  const images = [
    "https://via.placeholder.com/150?text=Logo1",
    "https://via.placeholder.com/150?text=Logo2",
    "https://via.placeholder.com/150?text=Logo3",
    "https://via.placeholder.com/150?text=Logo4",
    "https://via.placeholder.com/150?text=Logo5",
    "https://via.placeholder.com/150?text=Logo6",
    "https://via.placeholder.com/150?text=Logo1",
    "https://via.placeholder.com/150?text=Logo2",
    "https://via.placeholder.com/150?text=Logo3",
    "https://via.placeholder.com/150?text=Logo4",
    "https://via.placeholder.com/150?text=Logo5",
    "https://via.placeholder.com/150?text=Logo6"
  ];
  
  return (
    <div className=' mt-20 pt-20 flex w-full whitespace-nowrap justify-center py-5 gap-20 overflow-hidden'>
      {images.map((url, index) => (
        <Marquee key={index} imageUrl={url} />
        
      ))}
    </div>
  );
}
