"use client";
import React from 'react';
import Image from 'next/image';
import hero from "@/assets/hero/hero.png"
import googleBadge from "@/assets/badges/google.svg"
import appleBadge from "@/assets/badges/apple.svg"
import Link from 'next/link';
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-img">
                <Image src={hero} alt="dzair quiz" />
            </div>
            <div className="overlay">
                <div className="overlay-content">
                    <h1>Discover Algeria with Dzair Quiz - The Essential App for algerian History and Culture !</h1>
                    <div className="badges">
                    <div className="badge" > <Link   target="_blank" href="https://play.google.com/store/apps/details?id=com.kutami.dzairquiz"><img src={googleBadge.src} alt='' /></Link> </div>
                        <div className="badge"> <Link target="_blank" href="https://apps.apple.com/fr/app/dzair-quiz/id6451343748"><img src={appleBadge.src} alt='' /></Link> </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
