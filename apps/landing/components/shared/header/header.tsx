'use client'
import styles from "./header.module.scss";
import globalStyles from "@/app/variables.module.scss"

import Logo from "@/public/logo.png"

import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import clsx from "clsx";
import Heading from "../heading/heading";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={clsx(styles.header, isScrolled && styles.shrink)}>
            <div className={styles.leftAligned}>
                <Image
                    src={Logo.src}
                    alt="Lumenwake"
                    width={45}
                    height={45}
                />
            </div>
            <div className={clsx(styles.rightAligned, globalStyles.header)}>
                <div><Link href="/#about-us"><Heading>About Us</Heading></Link></div>
                <div><Link href="/#projects"><Heading>Games</Heading></Link></div>
                <div><Link href="/#platforms"><Heading>Platforms</Heading></Link></div>
                <div><Link href="/#contact-us"><Heading>Contact Us</Heading></Link></div>
                {/* <div><Link href="/games">Games</Link></div>
                <div><Link href="/portfolio">Portfolio</Link></div> */}
            </div>
        </div>
    );
}
