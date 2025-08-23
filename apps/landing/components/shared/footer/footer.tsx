import styles from "./footer.module.scss";
import globalStyles from "@/app/variables.module.scss"

import Image, { StaticImageData } from "next/image";

import SteamIcon from "@/public/icons/steam-icon.png"
import DiscordIcon from "@/public/icons/discord-icon.png"

interface SocialNetworkIconProps {
    icon: StaticImageData;
    url: string;
}

const SocialNetworkIcon = ({ icon, url }: SocialNetworkIconProps) => (
    <a
        className={styles.socialNetworkIcon}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Image
            src={icon.src}
            width={56}
            height={56}
            alt="social network"
        />
    </a>
)

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.border} />
            <div className={styles.iconsContainer}>
                <SocialNetworkIcon
                    icon={SteamIcon}
                    url="https://store.steampowered.com/app/3605030/Space_Bac/"
                />
                <SocialNetworkIcon
                    icon={DiscordIcon}
                    url="https://discord.gg/A3XWVXKGhX"
                />
            </div>
            <div className={styles.border} />
            <p>© All Rights Reserved Lumenwake Studio 2025</p>
        </footer>
    )
}