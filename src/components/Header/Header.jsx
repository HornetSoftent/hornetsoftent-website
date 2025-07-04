"use client";
import React, { useEffect, useState } from 'react';
import logo from "@/assets/logo/logo.svg"
import Image from 'next/image';

import { FaBars, FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa6";
import {usePathname} from 'next/navigation';
const Header = () => {
    const [show, setShow] = useState(false)
    const toggle = (index) => {
        setShow(index)
    }

    useEffect(() => {
        const body = document.body
        const mainMenu = document.getElementsByTagName('ul')[0]
        const nav = document.getElementsByTagName("nav")[0]
        window.innerWidth <= 768 && mainMenu.classList.contains('ul-active') ? (
            body.style.overflow = "hidden",
            nav.style.background = "black") :
            (nav.style.background = "inherit",
                body.style.overflow = "inherit")

    }, [show])
    const pathname = usePathname();
    return (
        <header>
        <a href='/'>
             <div className="logo"><Image src={logo} alt="Hornet SoftEnt" /></div>
        </a>
           
            <nav>
                <ul className={show === true ? "ul-active mainMenu" : "mainMenu"}>
                    <li><a className={pathname === "/" ? "active":""} href="/">Accueil</a></li>
                    <li><a className={pathname === "/apps/" ? "active":""} href="/#App">Apps</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a className={pathname === "/contact" ? "active":""} href="/contact">Contact</a></li>
                    <div className="hr" />
                    <div className='icons-socials'>
                        <li><a href="#" ><FaFacebookF /></a></li>
                        <li><a href="#" ><FaInstagram /></a></li>
                        <li><a href="#" ><FaTiktok /></a></li>
                    </div>
                </ul>

            </nav>
            <div onClick={() => toggle(!show)} className="openMenu">
                <FaBars />
            </div>
        </header>
    );
}

export default Header;
