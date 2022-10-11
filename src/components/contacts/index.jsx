import React, { useState } from "react";
import "./contacts.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
// import ParticlesConfig from "./particles-config";
// import Particles from "react-particles-js";
import { Fragment } from "react/cjs/react.production.min";

// EMAILJS
const service_ID = "service_id";
const template_ID = "template_id";
const user_ID = "add-your-key";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, r) => {
    sendEmail(
      service_ID,
      template_ID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      user_ID
    );
    r.target.reset();
  };

  const sendEmail = (service_ID, template_ID, variables, user_ID) => {
    emailjs
      .send(service_ID, template_ID, variables, user_ID)
      .then(() => {
        setSuccessMessage(
          "The form sent successfuly! I'll contact you as soon as possible!"
        );
      })
      .catch((err) => console.log(`Somthing went wrong ${err}`));
  };

  return (
    <Fragment>
      {/* <Particles
        style={{ position: "absolute", zIndex: "-1" }}
        params={ParticlesConfig}
      /> */}
      <div id="contacts" className="form-wrapper">
        <div className="form-container">
          <div className="form-card-gradient"></div>
          <h2>Message Me</h2>
          <span className="success-message">{successMessage}</span>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-input">
              <input
                type="text"
                placeholder="Name"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="input-error">This field is required</span>
              )}
            </div>
            <div className="text-input">
              <input
                type="text"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              {errors.email && (
                <span className="input-error">
                  This field is empty or invalid email format.
                </span>
              )}
            </div>
            <div className="text-input">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="input-error">This field is required</span>
              )}
            </div>
            <div className="text-area">
              <textarea
                type="text"
                className="text-area"
                placeholder="Describe your project"
                name="description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="input-error">This field is required</span>
              )}
            </div>
            <button className="button">SEND</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;

// Sender name: {{name}},

// Sender email: {{email}}

// Subject {{subject}}

// Description:

// {{description}}
