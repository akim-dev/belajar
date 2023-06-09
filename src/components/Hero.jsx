import React from "react";

const Hero = () => {
  return (
    <div id="hero" className=" flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className=" text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold">
          Hi, Ini Portfolio
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          perspiciatis!
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default Hero;
