import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import author from "../header/me.jpg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

const About = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Developer",
        "Content Creator",
        "UI/UX Designer ",
        "Logo Designer",
      ],
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h1>ABOUT ME</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="photo-wrapper">
              <img
                src={author}
                alt="Hovsep Stepanian"
                style={{ width: "100%" }}
              />
              <div className="photo-overlay">
                <div className="photo-text social">
                  <>
                    <a
                      href="https://www.facebook.com/hovsep.antranik"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FacebookShareButton className="icon-button">
                        <FacebookIcon className="icon" size={32} round={true} />
                      </FacebookShareButton>
                    </a>
                    <a
                      href="https://twitter.com/hovsepantranig"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <TwitterShareButton className="icon-button">
                        <TwitterIcon className="icon" size={32} round={true} />
                      </TwitterShareButton>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hovsep-stepanian-752554219/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <LinkedinShareButton className="icon-button">
                        <LinkedinIcon className="icon" size={32} round={true} />
                      </LinkedinShareButton>
                    </a>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 about-right">
            <h3>Hi I'm Hovsep Stepanian</h3>

            <h4>
              😎<span className="itype" ref={textRef}></span>
            </h4>

            <p>
              Freelancer from Iraq I'm a junior Front-End web develompent &
              Graphic Designer, fluent in classics like HTML,CSS, Javascript
            </p>
            <p>
              My Creative skills and experience field of Interest's are building
              new Web Technologies and Products and also in areas related to
              Deep Learning and Graphic Design make a logo Whenever possible, I
              also apply my passion for developing products with Modern
              Javascript Library and Frameworks like React.js
            </p>
            <p>
              My big brother Kevork is the main reason how I'm now he motivated
              me about web development I suddenly fell in love with programming
              and I have at least learn something, I think…
            </p>

            <h6>
              <span className="qoute-about">"</span>Websites promote you 24/7:
              No employee will do that.<span className="qoute-about">"</span>
              <br /> <b>– Paul Cookson </b>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
