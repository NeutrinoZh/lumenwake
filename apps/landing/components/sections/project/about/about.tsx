import styles from "./about.module.scss"
import Image, { StaticImageData } from "next/image"

import SteamIcon from "@/public/icons/steam-icon.png"

import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text"

interface AboutParams {
    description: string,
    characterPhoto: StaticImageData,
    steam?: string
}

export default function About({
    description,
    characterPhoto,
    steam
}: AboutParams) {
    return (
        <div className={styles.about}>
            <div className={styles.descriptionContainer}>
                <Heading>About The Game</Heading>
                <Text className={styles.description}>{description}</Text>
                <div className={styles.platforms}>
                    {steam ?
                        <a
                            className={styles.platform}
                            href={steam}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={SteamIcon.src}
                                width={42}
                                height={42}
                                alt=""
                            />
                        </a> : <></>
                    }
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