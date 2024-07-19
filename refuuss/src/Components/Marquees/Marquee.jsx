import React from 'react';

export default function Marquee({ imageUrl }) {
  return (
    <div className=''>
      <img src={imageUrl} alt="Logo" className='m-3 h-14 w-40 rounded-lg' />
      <img src={imageUrl} alt="Logo" className='m-3 h-14 w-40 rounded-lg' />
    </div>
  );
}
