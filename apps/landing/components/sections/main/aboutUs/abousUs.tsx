import styles from "./aboutUs.module.scss";
import globalStyles from "@/app/variables.module.scss"

import Image from "next/image";
import Logo from "@/public/logo.png"
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text"

export default function AboutUs() {
    return (
        <div id="about-us" className={styles.aboutUs}>
            <div className={styles.logoDiv}>
                <Image
                    src={Logo.src}
                    width={300}
                    height={300}
                    alt={"About Us"}
                />
            </div>
            <div className={styles.texts}>
                <Heading>About Us</Heading>
                <Text>We are a passionate game development studio dedicated to creating engaging, high-quality interactive experiences for players around the world. Specializing in mobile, WebGL and PC platforms, our team combines creativity, technical expertise, and innovative design to craft games that are visually stunning, mechanically satisfying, and rich in immersive worlds. From concept art to final release, we handle every stage of development with precision and care, ensuring that each project delivers a unique blend of fun, challenge, and replayability. </Text>
            </div>
        </div>
    )
}