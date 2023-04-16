import React from "react";

const WorkItem = ({ imgUrl, title, url, tech }) => {
  return (
    <div className=" bg-slate-300 dark:bg-slate-900 rounded-lg overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48
       object-cover"
      />
      <div className="text-gray-600 dark:text-gray-100 p-5 w-full ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-xl">
          {tech.map((item) => (
            <span
              key={item}
              className=" bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
