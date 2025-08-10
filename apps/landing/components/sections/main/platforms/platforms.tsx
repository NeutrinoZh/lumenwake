import { StaticImageData } from "next/image";
import styles from "./platforms.module.scss";
import globalStyles from "@/app/variables.module.scss"

import mobileIcon from "@/public/icons/mobile-icon.png"
import pcIcon from "@/public/icons/pc-icon.png"
import webglIcon from "@/public/icons/webgl-icon.png"

import Image from "next/image";

import { randomUUID } from "crypto";
import Heading from "@/components/shared/heading/heading";

interface CardProps {
    icon: StaticImageData,
    title: string,
    description: string
}

const Card = ({ icon, title, description }: CardProps) => (
    <div className={styles.card}>
        <div className={styles.hline}></div>
        <div className={styles.cardBlock}>
            <div className={styles.lineEffect}></div>
            <div>
                <Image
                    src={icon.src}
                    width={icon.width / 2}
                    height={icon.height / 2}
                    alt={""}
                />
            </div>
            <Heading>{title}</Heading>
            <p>
                {description}
            </p>
        </div>
        <div className={styles.hline}></div>
    </div>
)

export default function Platforms() {
    return (
        <div id="platforms" className={styles.platforms}>
            <Heading className={styles.title}>Platforms we work with</Heading>
            <div className={styles.cardContainer}>
                <Card
                    icon={mobileIcon}
                    title="Mobile"
                    description="We design and develop mobile games that bring immersive worlds and addictive mechanics right to players’ fingertips. Our mobile titles are optimized for smooth performance, intuitive controls, and engaging visuals across iOS and Android devices."
                    key={randomUUID()}
                />

                <Card
                    icon={pcIcon}
                    title="PC"
                    description="Our PC games deliver rich, immersive experiences that take full advantage of modern hardware capabilities. Designed for players who enjoy detailed worlds and engaging gameplay, our titles offer a perfect balance of stunning visuals and deep mechanics."
                    key={randomUUID()}
                />

                <Card
                    icon={webglIcon}
                    title="WebGL"
                    description="Our WebGL games offer instant playability directly in a browser, without the need for downloads or installations. These projects are built to be lightweight yet visually striking, making them perfect for quick entertainment or social gaming experiences. "
                    key={randomUUID()}
                />
            </div>
        </div>
    )
}