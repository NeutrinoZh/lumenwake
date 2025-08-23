import styles from "./intro.module.scss"
import globalStyles from "@/app/variables.module.scss"

import Image from "next/image";
import Logo from "@/public/logo.png"

import { Heading } from "@/components/shared/heading";

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
                <Heading className={globalStyles.header}>Games</Heading>
            </div>
        </div>
    )
}