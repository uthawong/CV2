import React from "react";
function Contact() {
  return (
    <div>
      <p className="description">
        <h1 className="sign">Caroline Uthawong-Burr</h1>
        <h1 className="contact-title">CONTACT</h1>

        <form action="/submit_form" method="post">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
          />
          <br />
          <br />

          <label htmlFor="email">E-mail</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Enter your e-mail"
            name="email"
          />
          <br />
          <br />

          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message"></textarea>
          <br />

          <input type="submit" value="Send" />
        </form>
      </p>
    </div>
  );
}

export default Contact;
