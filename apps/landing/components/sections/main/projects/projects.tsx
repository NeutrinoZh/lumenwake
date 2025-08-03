import styles from "./projects.module.scss";
import globalStyles from "@/app/variables.module.scss"
import clsx from "clsx";

import Image from "next/image";

import Arrow from "@/public/left-arrow.png"
import SpaceBac from "@/public/spacebac-logo.png"
import SteamIcon from "@/public/icons/steam-icon.png"

const ArrowComponent = ({ cls }: { cls: string | undefined }) => (
    <div className={clsx(styles.arrow, cls)}>
        <Image
            src={Arrow.src}
            width={26}
            height={90}
            alt="Arrow"
        />
    </div >
)

export default function Projects() {
    return (
        <div className={styles.projects}>
            <ArrowComponent cls={styles.leftArrow} />
            <div className={styles.content}>
                <div className={styles.description}>
                    <h1 className={globalStyles.header}>About the game</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Volutpat lacus aliquam in sociis ac vulputate. Dolor amet pharetra pretium rhoncus nulla varius lorem ultrices. Tristique quisque maecenas at duis tristique turpis rhoncus. Vestibulum at et neque pulvinar id volutpat semper. Sed volutpat nibh enim volutpat orci vel consequat pharetra. Fermentum in non euismod amet vulputate tortor. Pretium eu
                    </p>
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
                <div className={styles.image}>
                    <Image
                        src={SpaceBac.src}
                        width={815}
                        height={815}
                        alt=""
                    />
                </div>
            </div>
            <ArrowComponent cls={styles.rightArrow} />
        </div>
    )
}