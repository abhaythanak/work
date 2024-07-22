import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-950 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-16 lg:gap-32">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h4 className="mb-5 lg:mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter", "linkedin"].map((item, i) => (
              <a key={i} className="block mt-1 lg:mt-3 capitalize" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h4 className="mb-5 lg:mb-10 text-zinc-500 capitalize">links</h4>
            {["home", "about", "contact"].map((item, i) => (
              <a key={i} className="block mt-1 lg:mt-3 capitalize" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center items-center lg:items-end">
            <p className="mb-5 lg:mb-10 text-zinc-500 capitalize text-center lg:text-right">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <img
              className="h-14 w-36 object-cover"
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
