import React from "react";

const Footer = () => {
  return (
    <div className=" py-5 bg-slate-800 text-center rounded-t-lg">
      <a href="#hero" className=" block text-xl md:text-2xl ">
        Akim
      </a>
      <a
        href="http://"
        className="font-regular text-sm md:text-md hover:text-indigo-500 "
      >
        Test@gmail.com
      </a>
      <p className=" text-xs font-regular mt-2 text-gray-500">
        @Test-Blog, Creative {new Date().getFullYear()}. All right reserved
      </p>
    </div>
  );
};

export default Footer;
