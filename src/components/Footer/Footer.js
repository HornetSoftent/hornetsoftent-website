"use client";
import React from "react";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      
      <div className="hr" />

      <div className="copyright">
        <p> © 2023 Hornet Softent. All rights reserved.</p>
        <ul>
          <li> <a href="">CGU</a></li>
          <li> <a href="">Politique des cookies</a></li>
          <li> <a href="">Mention Legal</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
