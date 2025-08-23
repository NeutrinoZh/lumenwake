import Image, { StaticImageData } from "next/image"
import styles from "./intro.module.scss"

interface IntroParams {
    header: StaticImageData,
    logo?: StaticImageData,
    title: string
}

export default function Intro({
    header: header,
    logo: logo,
    title
}: IntroParams) {
    return (
        <div className={styles.intro}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.header}
                    src={header.src}
                    width={1920}
                    height={1080}
                    alt={title}
                />

                {logo ?
                    <Image
                        className={styles.logo}
                        src={logo.src}
                        width={640}
                        height={360}
                        alt={title}
                    /> :
                    <div className={styles.title}>
                        <h1>{title}</h1>
                    </div>
                }
            </div>
        </div>
    )
}