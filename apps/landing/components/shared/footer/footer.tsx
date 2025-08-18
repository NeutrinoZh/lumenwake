import styles from "./footer.module.scss";
import globalStyles from "@/app/variables.module.scss"

import Image, { StaticImageData } from "next/image";

import SteamIcon from "@/public/icons/steam-icon.png"
import DiscordIcon from "@/public/icons/discord-icon.png"

const SocialNetworkIcon = ({ icon }: { icon: StaticImageData }) => (
    <div className={styles.socialNetworkIcon}>
        <Image
            src={icon.src}
            width={56}
            height={56}
            alt="social network"
        />
    </div>
)

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.border} />
            <div className={styles.iconsContainer}>
                <SocialNetworkIcon
                    icon={SteamIcon}
                />
                <SocialNetworkIcon
                    icon={DiscordIcon}
                />
            </div>
            <div className={styles.border} />
            <p>© All Rights Reserved Lumenwake Studio 2025</p>
        </footer>
    )
}