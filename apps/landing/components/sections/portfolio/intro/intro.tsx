import styles from "./intro.module.scss"
import globalStyles from "@/app/variables.module.scss"

export default function Intro() {
    return (
        <div className={styles.intro}>
            <h1 className={globalStyles.header}>Portfolio</h1>

        </div>
    )
}