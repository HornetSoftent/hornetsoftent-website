"use client";
import React from 'react';
import Image from 'next/image';
import hero from "@/assets/hero/hero.png"
import googleBadge from "@/assets/badges/google.svg"
import appleBadge from "@/assets/badges/apple.svg"
import screen from "@/assets/hero/tifinagh.png"
import Link from 'next/link';
const Hero = () => {
    return (
        <section style={{background:"#3D1D73"}} className="hero">
             <div className="hero-img">
                <img src={"/apps/geoexplorer/bg/bg.png"} alt="dzair quiz" />
            </div> 
            <div className="overlay">
             
                <div className="overlay-content">
                    <h1>Explore le monde avec GéoExplorer – L’appli incontournable pour apprendre la géographie en t’amusant !</h1>
                    <div className="badges">
                    <div className="badge" > <Link   target="_blank" href="https://play.google.com/store/apps/details?id=com.hornetSoftent.GeoExplorer"><img src={googleBadge.src} alt='' /></Link> </div>
                        <div className="badge"> <Link target="_blank" href="https://apps.apple.com/fr/app/g%C3%A9oexplorer/id6746364868"><img src={appleBadge.src} alt='' /></Link> </div>
                        
                    </div>
                  
                </div>
 <div className='overlay-sreen'><img src={"/apps/preview/geoexplorer.png"}/></div>
            </div>
        </section>
    );
}

export default Hero;
