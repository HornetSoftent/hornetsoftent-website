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
          <li> <a href="/legal/conditions-generales-d-utilisation">CGU</a></li>
          <li> <a href="/legal/politique-de-cookies">Politique des cookies</a></li>
          <li> <a href="/legal/mentions-legales">Mention Legal</a></li>
          <li><a href="/legal/politique-de-confidentialite">Politique de confidentialité</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
