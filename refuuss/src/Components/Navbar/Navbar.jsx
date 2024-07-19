import React from "react";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className=" max-w-screen-xl mx-auto py-6 px-3 bg-gray-800 rounded-lg flex items-center justify-between">
      <div className="flex items-center">
      <h1 className="text-xl font-bold">LOGO</h1>
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((ele, i) => (
          ele.length === 0 ? (<span key={i} className="w-[2px] h-6 bg-zinc-600"></span>) :(
            <a className="text-sm flex items-center gap-1" key={i}>
            {i === 1 && (
              <span
                style={{ boxShadow: "0 0 0.45em #00FF19" }}
                className="inline-block w-1 h-1 rounded-full bg-green-600"
              ></span>
            )}
            {ele}
          </a>
          )
        ))}
      </div>
      </div>
      <Button title="Get started"/>
    </div>
  );
};

export default Navbar;
