"use client";
import React, { useEffect, useState } from 'react';
import logo from "@/assets/logo/logo.svg"
import Image from 'next/image';
import { FaBars, FaTiktok, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [show, setShow] = useState(false);
    const [vh, setVh] = useState(0);
    const pathname = usePathname();

    const toggle = (index) => {
        setShow(index);
    }

    const handleLinkClick = () => {
        if (window.innerWidth <= 768) {
            setShow(false);
        }
    };

    useEffect(() => {
        // Correction hauteur vh pour iOS
        const handleResize = () => {
            const newVh = window.innerHeight * 0.01;
            setVh(newVh);
            document.documentElement.style.setProperty('--vh', `${newVh}px`);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);

        const body = document.body;
        const mainMenu = document.getElementsByTagName('ul')[0];
        const nav = document.getElementsByTagName("nav")[0];
        const header = document.querySelector("header");

        if (window.innerWidth <= 768 && show) {
            body.style.overflow = "hidden";
            nav.style.background = "black";
            header.style.height = "100vh"
        } else {
            nav.style.background = "inherit";
            body.style.overflow = "inherit";
            header.style.height = "70px"
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [show]);

    return (
        <header>
            <div className='head'>
                <a href='/'>
                    <div className="logo"><Image src={logo} alt="Hornet SoftEnt" /></div>
                </a>

                <div onClick={() => toggle(!show)} className="openMenu">
                    <FaBars />
                </div>
            </div>

            <nav>
                <ul
                    className={show ? "ul-active mainMenu" : "mainMenu"}
                    style={show && window.innerWidth <= 768 ? {
                        height: `calc(${vh * 100}px - 115px)`,
                        top: '115px'
                    } : {}}
                >
                    <li><a className={pathname === "/" ? "active" : ""} href="/" onClick={handleLinkClick}>Accueil</a></li>
                    <li><a className={pathname === "/apps/" ? "active" : ""} href="/#App" onClick={handleLinkClick}>Apps</a></li>
                    <li><a href="/#About" onClick={handleLinkClick}>About</a></li>
                    <li><a className={pathname === "/contact" ? "active" : ""} href="/contact" onClick={handleLinkClick}>Contact</a></li>
                    <div className="hr" />
                    <div className='icons-socials'>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://x.com/HornetSoftent"><FaXTwitter /></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hornetsoftent/"><FaInstagram /></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@hornetsoftent_"><FaTiktok /></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@HornetSoftent"><FaYoutube /></a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
