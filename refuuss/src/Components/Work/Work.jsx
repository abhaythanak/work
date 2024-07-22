import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1721069209987-4c0f822ace36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      top: "35%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1721143362948-7929f10d5e4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      top: "49%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1721073700829-67def768b21f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
      top: "35%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1721069210015-7da51b2b98dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1720949442867-77cfc1414b5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzJ8fHxlbnwwfHx8fHw%3D",
      top: "55%",
      left: "40%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (data) => {
      function imagesShow(arr) {
        setImages((prev) =>
          prev.map((item, i) =>
            arr.indexOf(i) === -1
              ? { ...item, isActive: false }
              : { ...item, isActive: true }
          )
        );
      }

      switch (Math.floor(data * 100)) {
        case 0:
          imagesShow([]);
          break;
        case 1:
          imagesShow([0]);
          break;
        case 2:
          imagesShow([0, 1]);
          break;
        case 3:
          imagesShow([0, 1, 2]);
          break;
        case 4:
          imagesShow([0, 1, 2, 3]);
          break;
        case 6:
          imagesShow([0, 1, 2, 3, 4]);
          break;
        case 8:
          imagesShow([0, 1, 2, 3, 4, 5]);
          
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="w-full mmt-20 md:mt-40">
      <div className="relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[25vw] leading-none font-medium tracking-tight select-none mt-">
          WORK
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (ele, i) =>
              ele.isActive && (
                <img
                  style={{ top: ele.top, left: ele.left }}
                  className="absolute w-52 h-60 object-cover rounded-lg -translate-x-1/2 -translate-y-1/2 delay-75 duration-100"
                  key={i}
                  src={ele.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
