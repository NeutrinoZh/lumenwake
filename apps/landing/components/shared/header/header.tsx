import styles from "./header.module.scss";
import globalStyles from "@/app/variables.module.scss"

import Logo from "@/public/logo.png"

import Image from 'next/image'
import clsx from "clsx";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.leftAligned}>
                <Image
                    src={Logo.src}
                    alt="Lumenwake"
                    width={45}
                    height={45}
                />
            </div>
            <div className={clsx(styles.rightAligned, globalStyles.header)}>
                <div>Main</div>
                <div>Games</div>
                <div>Portfolio</div>
                <div>Contact</div>
            </div>
        </div>
    );
}
