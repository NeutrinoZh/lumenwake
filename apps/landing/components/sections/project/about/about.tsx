import styles from "./about.module.scss"
import globalStyles from "@/app/variables.module.scss"
import Image, { StaticImageData } from "next/image"

import SteamIcon from "@/public/icons/steam-icon.png"

import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text"

interface AboutParams {
    description: string,
    characterPhoto: StaticImageData
}

export default function About({
    description,
    characterPhoto
}: AboutParams) {
    return (
        <div className={styles.about}>
            <div className={styles.descriptionContainer}>
                <Heading>About The Game</Heading>
                <Text className={styles.description}>{description}</Text>
                <div className={styles.platforms}>
                    <div className={styles.platform}>
                        <Image
                            src={SteamIcon.src}
                            width={42}
                            height={42}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={characterPhoto.src}
                    width={512}
                    height={512}
                    alt="character"
                />
            </div>
        </div>
    )
}