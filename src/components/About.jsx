import React from "react";
import ServiceTitle from "./ServiceTitle";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20 ">
      <div className=" w-full md:w-6/12 ">
        <ServiceTitle>About me</ServiceTitle>
        <p className=" text-md text-gray-600 md:text-gray-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          velit alias. Placeat ea quidem accusamus tempora aspernatur soluta,
          eius possimus!
        </p>
      </div>
      <div>
        <img
          src={"https://github.com/"}
          alt=""
          className="w-full md:w-6/12 rounded-lg object-cover "
        />
      </div>
    </div>
  );
};

export default About;
