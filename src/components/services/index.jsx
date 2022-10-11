import React from "react";
import "./services.css";
import { servicesContent } from "./servicesContent";
import Counter from "../counter";

const Services = () => {
  return (
    <div id="services" className="container-fluid main-services-wrapper">
      <div className="container services-wrapper my-5">
        <h1>my offer to you</h1>
        <div className="row">
          {servicesContent.map((item, key) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={key}>
              <div className="service-box">
                <span className={item.className}></span>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Counter />
    </div>
  );
};

export default Services;
