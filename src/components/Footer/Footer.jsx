import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="links">
            <img src="images/logo.png" alt="logo" />
          <div className="companyLinks">
            <h2>Company</h2>
            {["About Us", "Privacy Policy", "Terms & Conditions"].map(
              (element, index) => {
                return <a key={index} href="#">{element}</a>;
              }
            )}
          </div>
          <div className="quickLinks">
            <h2>Quick Links</h2>
            {["Careers", "Advertise", "Community"].map(
              (element, index ) => {
                return <a key={index} href="#">{element}</a>;
              }
            )}
          </div>
        </div>
        <div className="contact">
          <p>Get some fresh movie news</p>
          <input type="email" placeholder="Email" />
          <div className="socialLinks">
            <i>
              <FaInstagram />
            </i>
            <i>
              <RiYoutubeLine />
            </i>
            <i>
              <FiFacebook />
            </i>
            <i>
              <FaLinkedin />
            </i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
