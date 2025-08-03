'use client'

import styles from "./intro.module.scss";
import globalStyles from "@/app/variables.module.scss"

import RayEffect from "./rayEffect";

import Image from 'next/image'
import FileIcon from "@/public/icons/file-icon.png"

export default function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.background}>
                <RayEffect />
            </div>
            <div className={styles.content}>
                <h1 className={globalStyles.header}>Lumenwake</h1>
                <button className={globalStyles.header}>
                    <Image
                        src={FileIcon.src}
                        alt="Download"
                        width={26}
                        height={30}
                    />
                    <p>
                        Download<br /> our commercial proposal
                    </p>
                </button>
            </div>
        </div>
    )
}