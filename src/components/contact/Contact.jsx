import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_q7t5ehs",
        "template_w88vswe",
        e.target,
        "DQ0y_RB7HJJi5q3Uv"
      )
      .then(() => {
          setEmailIsSent(true)
        });
  };

  return (
    <section id="contact">
      <h5>Reach Out</h5>
      <h2>CONTACT</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>muhammet@matiyev.xyz</h5>
            <a href="mailto:muhammet@matiyev.xyz">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Muhammet Matiyev</h5>
            <a href="https://www.linkedin.com/in/matiyev/">
              Request connection
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {emailIsSent ? (
          <h2 id="container Contact__sent-message">
            Your Message was successfully sent!
          </h2>
        ) : (
            <form onSubmit={sendEmail}>
            <input
              type="text"
              name="to_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
