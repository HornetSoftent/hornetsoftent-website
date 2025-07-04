import React from "react";
import dzquizHero from "@/assets/hero/dzairquiz.png";
import Image from "next/image";
import googleBadge from "@/assets/badges/google.svg";
import appleBadge from "@/assets/badges/apple.svg";
import appleBadgeBlack from "@/assets/badges/black.svg";
export default function CallToAction({color, hero, android, ios, ctitle, cdescription}) {
  return (
    <div style={{ background: color }} className="call-to-action">
      <div className="cta-img">
        <img src={hero} alt="dzair quiz" />
      </div>
      <div className="cta-content">
        <h2>Prêt à tester vos connaissances ?</h2>
        <p>
          {cdescription}
        </p>
        <div className="cta-buttons">
          <div className="badge-cta">
            <a
              href={android}
              target="_blank"
              rel="noopener noreferrer">
            <img src={googleBadge.src} alt="Google Play Badge" />
            </a>
          </div>
          <div className="badge-cta">
            <a
              href={ios}
              target="_blank"
              rel="noopener noreferrer" >
              <img src={appleBadgeBlack.src} alt="Apple Store Badge" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
