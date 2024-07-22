import React from "react";
import Button from "../Button/Button";

export default function Product({ val }) {
  return (
    <div className="w-full py-10 text-white border-b">
      <div onMouseEnter={(()=>{})} className=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        <h1 className="text-3xl md:text-6xl capitalize font-semibold text-center md:text-left">{val.title}</h1>
        <div className="dets w-full md:w-1/2">
          <p className="mb-6 md:mb-10 text-center md:text-left">{val.description}</p>
          <div className="flex  items-center gap-10">
            {val.live && <Button title="Get started" />}
            {val.class && <Button title="Case study" />}
          </div>
        </div>
      </div>
    </div>
  );
}
