import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import OurApp from "@/components/OurApp/OurApp";
import DzairQuiz from "@/components/Feature/DzairQuiz";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Newsletter from "@/components/Newsletter/Newsletter";
export default function Home() {
  return (
    <main>
       <Header />
      <Hero />
      <OurApp />
      <DzairQuiz />
      <About />
       <Newsletter/> 
      <Footer />
    </main>
  );
}
