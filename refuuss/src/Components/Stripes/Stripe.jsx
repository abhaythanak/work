import React from 'react'

export default function Stripe({elem}) {
  return (
    <div className='w-[16.66%] px-4 py-5 border-t-2 border-b-2 border-r-2 border-zinc-700'>
      <img src={elem.url} alt="" />
      <span className='font-semibold'>{elem.number}</span>
    </div>
  )
}
