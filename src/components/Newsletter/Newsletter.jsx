import React from 'react'
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
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
               <li><a target="_blank"
                            rel="noopener noreferrer"  href="https://x.com/HornetSoftent"><FaXTwitter /></a></li>
                                      <li><a target="_blank"
                            rel="noopener noreferrer"  href="https://www.instagram.com/hornetsoftent/"><FaInstagram /></a></li>
                                      <li><a target="_blank"
                            rel="noopener noreferrer"  href="https://www.tiktok.com/@hornetsoftent_"><FaTiktok /></a></li>
                                      <li><a target="_blank"
                            rel="noopener noreferrer"  href="https://www.youtube.com/@HornetSoftent"><FaYoutube /></a></li>
              
            </ul>
          </div>
        </div>
        <div className="vr" />
        <div className="descri">
          <p>
            Inscrivez-vous à notre newsletter exclusive pour être parmi les premiers à découvrir nos dernières créations, nos actualités passionnantes et accéder aux phases de test bêta.
En rejoignant notre ruche, vous aurez un accès privilégié à l’univers de Hornet Softent, où chaque newsletter est une invitation à l’aventure.
          </p>
        </div>
      </div>
  )
}
