import React from "react";
import "./contect.css";
const ContactSection = () => {
  return (
    <section
      className="contact"
      id="contact"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h2 className="gf_h2 text-dark heading">
        <i className="bi bi-telephone-outbound-fill"></i>
        Let's<span>Connect</span>
      </h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="a0cec677-5b58-4dfd-9428-5b010453488c"
        />
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="text" name="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="number" name="mobile" placeholder="Mobile Number" />
          <input type="text" name="subject" placeholder="Email subject" />
        </div>
        <textarea
          name="message"
          id="#"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="btnn">
          Submit<i className="bi bi-send-fill"></i>
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
