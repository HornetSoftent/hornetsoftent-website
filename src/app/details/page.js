"use client";
import Header from "@/components/Header/Header";
import React from "react";
import dzquizHero from "@/assets/hero/dzairquiz.png";
import dzquizscreenshot from "@/assets/apps/DzairQuiz/hero.png";
import googleBadge from "@/assets/badges/google.png";
import appleBadge from "@/assets/badges/apple.png";
import { FaStar } from "react-icons/fa6";

import Image from "next/image";
import Hero from "@/components/details/hero/Hero";
import Info from "@/components/details/Info/Info";
import CallToAction from "@/components/details/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    <main>
      <Hero />
      <Info/>
       <CallToAction/>
       <Footer/>  
    </main>
  );
}
