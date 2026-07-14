"use client";
import React from 'react';
import Image from 'next/image';
import hero from "@/assets/hero/hero.png"
import aporiaBg from '@/assets/logo/games/outwyasLabyrinth/bg/Aporia-bg.png'
import googleBadge from "@/assets/badges/google.svg"
import appleBadge from "@/assets/badges/apple.svg"
import screen from "@/assets/hero/tifinagh.png"
import logoGame from "@/assets/logo/games/outwyasLabyrinth/aporia.png"

import Link from 'next/link';
const Hero = () => {
    return (
        <section  className="hero">
              <div className="hero-img">
                <img src={aporiaBg.src} alt="dzair quiz" />
            </div>  
            <div className="overlay">
             
                <div className="overlay-content">
                <div className="logo-game">
                    <img src={logoGame.src} alt="" />
                </div>
                    <h1>Hidden keys lead to the exit, but corridors, dead ends, and creatures block your path.</h1>
                    <div className="badges">
                    <div className="badge" > <Link   target="_blank" href="https://play.google.com/store/apps/details?id=com.hornetsoftent.aporia"><img src={googleBadge.src} alt='' /></Link> </div>
                        <div className="badge"> <Link target="_blank" href="https://apps.apple.com/fr/app/aporia-into-the-dark/id6776793051"><img src={appleBadge.src} alt='' /></Link> </div>
                        
                    </div>
                  
                </div>
 {/* <div className='overlay-sreen'><img src={"/apps/preview/geoexplorer.png"}/></div> */}
            </div>
        </section>
    );
}

export default Hero;
