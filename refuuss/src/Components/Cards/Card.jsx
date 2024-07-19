import React from "react";

export default function Card() {
  return (
    <div className="w-1/2 bg-zinc-800 p-5 rounded-xl">
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <span>Arrow</span>
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading</h1>
      </div>
    </div>
  );
}
 