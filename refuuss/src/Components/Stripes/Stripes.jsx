import React from 'react'
import Stripe from './Stripe'

export default function Stripes() {

    const data = [
        {url: "", number: 48},
        {url: "", number: 48},
        {url: "", number: 48},
        {url: "", number: 48},
        {url: "", number: 48},
        {url: "", number: 48},
    ]

  return (
    <div className=' flex items-center mt-32'>
        {data.map((ele,i)=>(
            <Stripe key={i} elem={ele}/>
        ))}
      
    </div>
  )
}
 