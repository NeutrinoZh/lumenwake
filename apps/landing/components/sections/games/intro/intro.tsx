import styles from "./intro.module.scss"
import globalStyles from "@/app/variables.module.scss"

import Image from "next/image";
import Logo from "@/public/logo.png"

export default function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.logoWrapper}>
                <Image
                    src={Logo.src}
                    width={200}
                    height={200}
                    alt="Intro"
                />
            </div>
            <div className={styles.description}>
                <h1 className={globalStyles.header}>Games</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Arcu justo diam ultrices tellus. Non neque donec risus et mollis. </p>
            </div>
        </div>
    )
}