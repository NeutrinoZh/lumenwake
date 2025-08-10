import Heading from "../heading/heading";
import styles from "./hline.module.scss";

interface HlineProps {
    header?: string;
}

export default function Hline({ header = "" }: HlineProps) {
    return (
        <div className={styles.lineSection}>
            <div className={styles.hline}></div>
            {header && typeof header === "string" && (
                <>
                    <Heading>{header}</Heading>
                    <div className={styles.hline}></div>
                </>
            )}
        </div>
    );
}