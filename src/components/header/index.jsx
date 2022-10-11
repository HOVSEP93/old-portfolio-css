import React from "react";
import "./header.css";
import { motion } from "framer-motion";
import Particles from "react-particles-js";
import author from "./me-main.png";
import MainTitle from "./MainTitle";
import { Fragment } from "react/cjs/react.production.min";

const Header = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Fragment>
      <Particles
        style={{ position: "absolute" }}
        params={{
          particles: {
            shape: {
              type: "images",
              image: {
                src: "react-logo-black.svg",
              },
            },
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 400,
              },
            },
            opacity: {
              value: 0.1,
            },
            polygon: {
              nb_sides: 15,
            },
            size: {
              value: 45,
            },
            line_linked: {
              enable: false,
            },
          },
        }}
      />

      <div id="header" className="header">
        <img src={author} alt="Hovsep Stepanian" />
        <MainTitle />
        <motion.div
          className="icons-wrapper"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div style={{ display: "flex" }}>
            <motion.div className="item-1 item" variants={item}></motion.div>
            <motion.div className="item-2 item" variants={item}></motion.div>
            <motion.div className="item-3 item" variants={item}></motion.div>
            <motion.div className="item-4 item" variants={item}></motion.div>
            <motion.div className="item-5 item" variants={item}></motion.div>
            <motion.div className="item-6 item" variants={item}></motion.div>
            <motion.div className="item-7 item" variants={item}></motion.div>
            <motion.div className="item-8 item" variants={item}></motion.div>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Header;
