import React from "react";
import ServiceTitle from "./ServiceTitle";
import WorkItem from "./WorkItem";
import work from "../data/work";

const Work = () => {
  return (
    <div className="py-12">
      <ServiceTitle id={work} />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {/* <WorkItem /> */}
        {work.map((wk) => (
          <WorkItem
            key={wk.title}
            imgUrl={wk.imgUrl}
            title={wk.title}
            url={wk.workUrl}
            tech={wk.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
