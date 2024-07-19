import React from 'react';

function Button({ title }) {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-center'>
      <span className='text-sm font-medium'>{title}</span>
    </div>
  );
}

export default Button;
