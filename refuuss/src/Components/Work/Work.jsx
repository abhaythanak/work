import React from 'react'

export default function Work() {


    const images = [
        {url: "https://images.unsplash.com/photo-1721069209987-4c0f822ace36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", top: "50%", left: "50%", isActive: false},
        {url: "https://plus.unsplash.com/premium_photo-1721143362948-7929f10d5e4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", top: "53%", left: "48%", isActive: false},
        {url: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8", top: "47%", left: "52%", isActive: false},
        {url: "https://images.unsplash.com/photo-1721073700829-67def768b21f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D", top: "51%", left: "49%", isActive: false},
        {url: "https://images.unsplash.com/photo-1721069210015-7da51b2b98dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D", top: "53%", left: "53%", isActive: false},
        {url: "https://images.unsplash.com/photo-1720949442867-77cfc1414b5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzJ8fHxlbnwwfHx8fHw%3D", top: "55%", left: "52%", isActive: false},
    ]
  return (
    <div className='w-full'>
      <div className="relative max-w-screen-xl mx-auto text-center mt-20">
        <h1 className='text-[25vw] leading-none font-medium tracking-tight select-none mt-'>WORK</h1>
        <div className="absolute top-0 w-full h-full ">
            {images.map((ele,i)=>ele.isActive && (
                <img style={{top: ele.top, left: ele.left,}} className='absolute w-52 h-60 object-cover rounded-lg -translate-x-1/2 -translate-y-1/2 'key={i} src={ele.url} alt="" />
            )
            )}
        </div>
      </div> 
      
    </div>
  )
}
