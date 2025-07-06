import React from 'react'
import dzquizHero from "@/assets/hero/dzairquiz.png";
import dzquizscreenshot from "@/assets/apps/DzairQuiz/hero.png";
import googleBadge from "@/assets/badges/google.svg";
import appleBadge from "@/assets/badges/apple.svg";
import { FaStar } from "react-icons/fa6";
import Header from "@/components/Header/Header";
import Image from "next/image";
export default function Hero({appName, title, color, preview, hero, android, ios}) {
  return (
     <div style={{ background: color }} className="details">
      <Header />
      <img className="hero-img" src={hero} alt="app Hero" />
      <div className="hero-overlay">
         <div className="hero-content">
         <div className="content">
 <h1>{appName}</h1>
        <p>
          {title}
        </p>
          <div className="hero-rating">
       
            {[...Array(5)].map((_,index)=>{
                return (
                    <FaStar className="star" key={index} color="#F5BE1E"  />
                )
            })} <h3>(5.0)</h3>
      
      </div>
        <div className="badges-app">
        <div className="badge">
            <a
            href={android}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image  src={googleBadge} alt="Google Play Badge" width={0}
  height={0} />
          </a>
        </div>
        <div className="badge">
            <a
            href={ios}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image  src={appleBadge} alt="Apple Store Badge" width={0} height={0} />
          </a>
        </div>
         
          
         
        </div>
         </div>
       
      </div>
    
      <div className="hero-app-screenshot">
        <img src={preview} alt="Dzair Quiz Logo" />
      </div>

      </div>
     
    </div>
  )
}
