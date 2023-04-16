import React from "react";

const ServiceTitle = ({ children, id }) => {
  return (
    <h1
      id="{id && id}"
      className="text-3xl font-bold mb-5 text-indigo-700 dark:text-indigo-500"
    >
      Skill saya
    </h1>
  );
};

export default ServiceTitle;
