import styles from "./hline.module.scss";
import globalStyles from "@/app/variables.module.scss"

interface HlineProps {
    header?: string;
}

export default function Hline({ header = "" }: HlineProps) {
    return (
        <div className={styles.lineSection}>
            <div className={styles.hline}></div>
            {header && typeof header === "string" && (
                <>
                    <h1 className={globalStyles.header}>{header}</h1>
                    <div className={styles.hline}></div>
                </>
            )}
        </div>
    );
}