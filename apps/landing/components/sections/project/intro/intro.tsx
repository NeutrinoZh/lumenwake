import Image, { StaticImageData } from "next/image"
import styles from "./intro.module.scss"

interface IntroParams {
    preview: StaticImageData,
    title: string
}

export default function Intro({
    preview,
    title
}: IntroParams) {
    return (
        <div className={styles.intro}>
            <div className={styles.imageContainer}>
                <Image
                    src={preview.src}
                    fill
                    alt={title}
                />

                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}