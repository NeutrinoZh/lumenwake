import styles from "./technologyCarousel.module.scss";

import Image, { StaticImageData } from "next/image";

import th3maxIcon from "@/public/icons/3dmax-icon.png"
import afterEffectsIcon from "@/public/icons/after-effects-icon.png"
import awsIcon from "@/public/icons/aws-icon.png"
import blenderIcon from "@/public/icons/blender-icon.png"
import cppIcon from "@/public/icons/cpp-icon.png"
import dockerIcon from "@/public/icons/docker-icon.png"
import dynamoDbIcon from "@/public/icons/dynamodb-icon.png"
import figmaIcon from "@/public/icons/figma-icon.png"
import firebaseIcon from "@/public/icons/firebase-icon.png"
import illustratorIcon from "@/public/icons/illustrator-icon.png"
import mayaIcon from "@/public/icons/maya-icon.png"
import netcoreIcon from "@/public/icons/netcore-icon.png"
import photonIcon from "@/public/icons/photon-icon.png"
import photoshopIcon from "@/public/icons/photoshop-icon.png"
import postgresIcon from "@/public/icons/postgres-icon.png"
import premierproIcon from "@/public/icons/premierepro-icon.png"
import unityIcon from "@/public/icons/unity-icon.png"

import { randomUUID } from "crypto";

const TechnologyIcon = ({ image }: { image: StaticImageData }) => (
    <div className={styles.technologyIcon}>
        <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt=""
        />
    </div>
);

export default function TechnologyCarousel() {
    const icons = [
        th3maxIcon,
        afterEffectsIcon,
        awsIcon,
        blenderIcon,
        cppIcon,
        dockerIcon,
        dynamoDbIcon,
        figmaIcon,
        firebaseIcon,
        illustratorIcon,
        mayaIcon,
        netcoreIcon,
        photonIcon,
        photoshopIcon,
        postgresIcon,
        premierproIcon,
        unityIcon,
    ]

    const duplicatedIcons = [...icons, ...icons];

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.technologyCarousel}>
                {duplicatedIcons.map((icon) => (
                    <TechnologyIcon image={icon} key={randomUUID()} />
                ))}
            </div>
        </div>
    )
}