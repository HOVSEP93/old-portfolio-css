import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import Particles from "react-particles-js";

import "./testimonials.css";

import { data } from "./data";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Fragment } from "react/cjs/react.production.min";
import ParticlesConfig from "./particles-config";

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  return (
    <Fragment>
      {/* Particles 1 */}
      <Particles style={{ position: "absolute" }} params={ParticlesConfig} />

      <section id="testimonials" className="main-testimonials-wrapper">
        <h1
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            color: "#4ab",
            fontWeight: "900",
          }}
        >
          my happy clients
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: true,
          }}
          // pagination={true}
        >
          {data.map((item, key) => (
            <SwiperSlide key={key}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.testimony}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Particles 2   */}
        <Particles
          style={{ position: "absolute", zIndex: "1" }}
          // id="particles-js"
          params={ParticlesConfig}
        />

        <div className="quote-parent">
          <div className="quote n-box1 flex-with-center">
            <h1>🤍</h1>
            <div className="quote-content">
              <p>
                “ Knowledge is <span>power</span>.”{" "}
              </p>

              <h5>– Francis Bacon</h5>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
