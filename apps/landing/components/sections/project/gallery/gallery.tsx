
import Image, { StaticImageData } from "next/image";
import styles from "./gallery.module.scss";
import { randomUUID } from "crypto";

interface GalleryEntryProps {
    entryImage: string
    width: number,
    height: number
}

const GalleryEntry = ({
    entryImage,
    width,
    height
}: GalleryEntryProps) => (
    <div className={styles.entry}>
        <Image
            src={entryImage}
            width={width}
            height={height}
            alt=""
        />
    </div>
)

interface GalleryProps {
    screenshots: string[],
    isMobile: boolean
}

export default function Gallery({
    screenshots, isMobile
}: GalleryProps) {
    return (
        <div className={styles.gallery}>
            {
                screenshots.map(
                    item =>
                        <GalleryEntry
                            key={randomUUID()}
                            entryImage={item}
                            width={isMobile ? 405 : 720}
                            height={isMobile ? 800 : 405}
                        />
                )
            }
        </div>
    )
}