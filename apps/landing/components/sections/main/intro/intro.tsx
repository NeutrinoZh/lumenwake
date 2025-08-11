'use client'

import styles from "./intro.module.scss";
import globalStyles from "@/app/variables.module.scss"

import RayEffect from "./rayEffect";

import Image from 'next/image'
import FileIcon from "@/public/icons/file-icon.png"
import { Heading } from "@/components/shared/heading";

export default function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.background}>
                <RayEffect />
            </div>
            <div className={styles.content}>
                <Heading>Lumenwake</Heading>
                <button className={globalStyles.header}>
                    <Image
                        src={FileIcon.src}
                        alt="Download"
                        width={26}
                        height={32}
                    />
                    <Heading>
                        Download<br /> our commercial proposal
                    </Heading>
                </button>
            </div>
        </div >
    )
}