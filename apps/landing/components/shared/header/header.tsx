'use client'

import styles from "./header.module.scss";
import globalStyles from "@/app/variables.module.scss"

import Logo from "@/public/logo.png"

import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import clsx from "clsx";
import Heading from "../heading/heading";

import Hamburger from 'hamburger-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenHamburger, setIsOpenHamburger] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={clsx(
            styles.header,
            isScrolled && styles.shrink,
            isOpenHamburger && styles.openedHamburger
        )}>
            <div className={styles.leftAligned}>
                <Image
                    src={Logo.src}
                    alt="Lumenwake"
                    width={45}
                    height={45}
                />
            </div>

            <nav className={clsx(styles.rightAligned, styles.desktopNav)}>
                <div className={styles.navElement}><Link href="/#about-us"><Heading>About Us</Heading></Link></div>
                <div className={styles.navElement}><Link href="/#projects"><Heading>Games</Heading></Link></div>
                <div className={styles.navElement}><Link href="/#platforms"><Heading>Platforms</Heading></Link></div>
                <div className={styles.navElement}><Link href="/#contact-us"><Heading>Contact Us</Heading></Link></div>
                {/* <div><Link href="/games">Games</Link></div>
                <div><Link href="/portfolio">Portfolio</Link></div> */}
            </nav>

            <div className={clsx(styles.rightAligned, styles.mobileNav)}>
                <div className={styles.hamburgerWrapper}>
                    <Hamburger
                        color="#ffffff"
                        toggled={isOpenHamburger}
                        toggle={setIsOpenHamburger}
                    />
                </div>


                {
                    isOpenHamburger ?
                        <nav>
                            <div className={styles.navElement} onClick={() => setIsOpenHamburger(false)}><Link href="/#about-us"><Heading>About Us</Heading></Link></div>
                            <div className={styles.navElement} onClick={() => setIsOpenHamburger(false)}><Link href="/#projects"><Heading>Games</Heading></Link></div>
                            <div className={styles.navElement} onClick={() => setIsOpenHamburger(false)}><Link href="/#platforms"><Heading>Platforms</Heading></Link></div>
                            <div className={styles.navElement} onClick={() => setIsOpenHamburger(false)}><Link href="/#contact-us"><Heading>Contact Us</Heading></Link></div>
                        </nav> : <></>
                }
            </div>
        </div >
    );
}
