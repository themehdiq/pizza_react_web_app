import React from "react";
import pizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
      >
        hii
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="full-name">Full name</label>
          <input name="full-name" type="text" placeholder="enter fullname" />
          <label htmlFor="user-email">Email</label>
          <input name="user-email" type="email" placeholder="enter email" />
          <label htmlFor="user-message">Message</label>
          <textarea
            name="user-message"
            cols="30"
            rows="10"
            required
            placeholder="enter your message ..."
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
