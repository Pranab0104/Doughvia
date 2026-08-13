import React from "react";
import { Link } from "react-router-dom";
import { RiMapPin2Fill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Foot">
      <h1>
        Bringing warmth, freshness, and handcrafted bakery delights to every
        table.
      </h1>

      <p>
        " Every memorable celebration begins with a conversation. Whether you're
        ordering handcrafted pastries, planning a custom cake, or simply have a
        question, we'd love to hear from you. Share your ideas, and let's bake
        something unforgettable together. "
      </p>
      <div className="conta">
        <div className="Card">
          <div className="Baxxa">
            <div className="one">
              <h4>Doughvia</h4>
              <h5>Where Every Bite Feels Like Home.</h5>
            </div>
            <div className="one">
              <h4>Quick Links</h4>

              <h5>
                <Link to="/">Home</Link>
              </h5>

              <h5>
                <Link to="/about">About Us</Link>
              </h5>

              <h5>
                <Link to="/menu">Menu</Link>
              </h5>

              <h5>
                <Link to="/celebrate">Celebrate</Link>
              </h5>

              <h5>
                <Link to="/contact">Contact Us</Link>
              </h5>
            </div>
            <div className="one">
              <h4>Contact</h4>

              <div className="contactItem">
                <RiMapPin2Fill className="icon" />
                <span>Chandrapur, Maharashtra</span>
              </div>

              <div className="contactItem">
                <RiPhoneFill className="icon" />
                <span>+91 98765 43210</span>
              </div>

              <div className="contactItem">
                <RiMailFill className="icon" />
                <span>hello@Doughvia.com</span>
              </div>

              <div className="socialIcons">
                <FaInstagram />
                <FaFacebook />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>© 2026 Doughvia . All Rights are Reserved.</h2>
    </div>
  );
};

export default Footer;
