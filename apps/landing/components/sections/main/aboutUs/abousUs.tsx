import styles from "./aboutUs.module.scss";
import globalStyles from "@/app/variables.module.scss"

import Image from "next/image";

import Logo from "@/public/logo.png"

export default function AboutUs() {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.logoDiv}>
                <Image
                    src={Logo.src}
                    width={300}
                    height={300}
                    alt={"About Us"}
                />
            </div>
            <div className={styles.texts}>
                <h1 className={globalStyles.header}>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Volutpat lacus aliquam in sociis ac vulputate. Dolor amet pharetra pretium rhoncus nulla varius lorem ultrices. Tristique quisque maecenas at duis tristique turpis rhoncus. Vestibulum at et neque pulvinar id volutpat semper. Sed volutpat nibh enim volutpat orci vel consequat pharetra. Fermentum in non euismod amet vulputate tortor. Pretium eu </p>
            </div>
        </div>
    )
}