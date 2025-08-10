import { randomUUID } from "crypto";
import styles from "./categories.module.scss"
import globalStyles from "@/app/variables.module.scss"

const Category = () => (
    <div className={styles.category}>

    </div>
);

export default function Categories() {
    return (
        <div className={styles.categories}>
            <div className={styles.categoriesContainer}>
                <Category key={randomUUID()} />
                <Category key={randomUUID()} />
                <Category key={randomUUID()} />
                <Category key={randomUUID()} />
                <Category key={randomUUID()} />
                <Category key={randomUUID()} />
            </div>
        </div>
    )
}