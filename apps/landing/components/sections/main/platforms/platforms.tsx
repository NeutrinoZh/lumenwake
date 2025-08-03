import { StaticImageData } from "next/image";
import styles from "./platforms.module.scss";
import globalStyles from "@/app/variables.module.scss"

import mobileIcon from "@/public/icons/mobile-icon.png"
import pcIcon from "@/public/icons/pc-icon.png"
import webglIcon from "@/public/icons/webgl-icon.png"

import Image from "next/image";

import { randomUUID } from "crypto";
import clsx from "clsx";

interface CardProps {
    icon: StaticImageData,
    title: string,
    description: string
}

const Card = ({ icon, title, description }: CardProps) => (
    <div className={styles.card}>
        <div className={styles.hline}></div>
        <div className={styles.cardBlock}>
            <div>
                <Image
                    src={icon.src}
                    width={icon.width / 2}
                    height={icon.height / 2}
                    alt={""}
                />
            </div>
            <h1 className={globalStyles.header}>{title}</h1>
            <p>
                {description}
            </p>
        </div>
        <div className={styles.hline}></div>
    </div>
)

export default function Platforms() {
    return (
        <div className={styles.platforms}>
            <h1 className={clsx(globalStyles.header, styles.title)}>Platforms we work with</h1>
            <div className={styles.cardContainer}>
                <Card
                    icon={mobileIcon}
                    title="Mobile"
                    description="We develop games of various profiles, from puzzles and match 3 to realistic games with top-notch graphics, delivering engaging Android, iOS, and cross-platform gaming experiences."
                    key={randomUUID()}
                />

                <Card
                    icon={pcIcon}
                    title="PC"
                    description="Our PC and console games use the full extent of game engines’ power. We create mesmerizing titles for PlayStation, Xbox, Nintendo Switch, and PC, providing no borders for your imagination."
                    key={randomUUID()}
                />

                <Card
                    icon={webglIcon}
                    title="WebGL"
                    description="Our games can reach your players even through web browsers. Customizable controls and high-quality visuals – we provide seamless player experiences available from anywhere."
                    key={randomUUID()}
                />
            </div>
        </div>
    )
}