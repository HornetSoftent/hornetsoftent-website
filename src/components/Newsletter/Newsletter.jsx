import React from 'react'
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa6";
export default function Newsletter() {
  return (
    <div className="container-f">
        <div className="c-p">
          <div className="title-newsLetter">
            <h1>JOIN THE HIVE OF HORNET SOFTENT.</h1>
          </div>
          <div className="newsLetter">
            <input type="email" placeholder="Email" />
            <button className="btn-i">
              <FaPaperPlane />
            </button>
          </div>
          <div className="socialM">
            <ul>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaTiktok />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
        <div className="vr" />
        <div className="descri">
          <p>
            Join our exclusive newsletter to be among the first to hear about
            our latest creations, exciting updates and access to beta testing.
            By becoming a member of our hive, you'll have preview access to the
            Hornet Softent universe, where every newsletter is an invitation to
            discovery.
          </p>
        </div>
      </div>
  )
}
