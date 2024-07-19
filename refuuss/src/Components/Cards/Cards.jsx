import React from 'react'
import Card from './Card'

export default function Cards() {
  return (
    <div className='w-full'>
      <div className="flex gap-5 bg-zinc-500 max-w-screen-xl mx-auto py-32">
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
