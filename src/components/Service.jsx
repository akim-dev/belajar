import React from "react";
import ServiceTitle from "./ServiceTitle";
import services from "../data/services";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <div className="py-12">
      <ServiceTitle title />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          //   <h1>{service.title}</h1>
          <ServiceItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
