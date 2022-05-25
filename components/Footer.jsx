import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">Built by Aaron Durant in 2022</p>
      <p className="icons">
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          <SiNextdotjs />
        </a>
        <a href="https://stripe.com" target="_blank" rel="noreferrer">
          <FaCcStripe />
        </a>
        <a
          href="https://github.com/AaronRDurant/tech-commerce"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;
