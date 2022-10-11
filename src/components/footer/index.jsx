import React from "react";
import "./footer.css";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutubeSquare,
  FaLinkedinIn,
  FaTwitter,
  FaMusic,
  FaYahoo,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid footer text-center py-2">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-3 col-sm-12 link-container">
            <ul>
              <li>
                <a
                  href="https://mail.google.com/mail/u/2/#inbox"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaYahoo className="icon" size={32} round={true} />
                </a>
              </li>

              <li>
                <a
                  href="https://paul-baghdadian-music-h21.netlify.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaMusic className="icon" size={32} round={true} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 link-container">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/hovsep.antranik"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook className="icon" size={32} round={true} />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/hovsepantranig"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaTwitter className="icon" size={32} round={true} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 link-container">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/hovsep-stepanian-752554219/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedinIn className="icon" size={32} round={true} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hovsepstepanian/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaInstagram className="icon" size={32} round={true} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 link-container">
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCGXPdri3jaqvIsKGVnFrY6A/featured"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaYoutubeSquare className="icon" size={32} round={true} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HOVSEP93"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub className="icon" size={32} round={true} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span style={{ color: "#fff" }}>
        Made with 🤍 <span className="colorName">Hovsep Stepanian</span> | All
        Rights Reserved ©{`${new Date().getFullYear()}`}
      </span>
    </footer>
  );
};

export default Footer;
