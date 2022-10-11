import React from "react";
import "./portfolio.css";

import { content } from "./content";
import { Fragment } from "react/cjs/react.production.min";

const Portfolio = () => {
  return (
    <Fragment>
      <div id="portfolio" className="container-fluid">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "#4087a3",
            margin: "4rem 0",
          }}
        >
          Portfolio
        </h1>

        <section className="grid row">
          {content.map((item, key) => (
            <div
              key={key}
              className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center"
            >
              <figure className="effect">
                <img src={item.img} alt={item.title} />
                <figcaption>
                  <h2>
                    {item.title}&nbsp;&nbsp;<span>{item.subtitle}</span>
                  </h2>

                  <p
                    className="description"
                    style={{
                      float: "left",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <a
                      href={item.demo}
                      className="demo-links"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      DEMO
                    </a>

                    <br />
                    <a
                      href={item.github}
                      className="demo-links"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GITHUB
                    </a>
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default Portfolio;
