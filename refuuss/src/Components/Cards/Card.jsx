import React from "react";

export default function Card({width, start, para, Hover}) {
  return (
    <div className={`${width} ${Hover}   bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <span>Arrow</span>
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading</h1>
      </div>
      <div className="down w-full ">
        {
          start &&  (
            <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">start a project</h1>
            <button className="rounded-full mt-5 py-2 px-5 border border-zinc-100">Contact Us</button>
            </>
          
          )
        }
        {
          para &&  (
            <>
            <p className=" bottom-3 text-sm mt-5 text-zinc-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates?</p>
            </>
          
          )
        }
        
      </div>
    </div>
  );
}
 