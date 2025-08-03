import styles from "./contactUs.module.scss";
import globalStyles from "@/app/variables.module.scss"
import clsx from "clsx";

const Input = ({ placeholder }: { placeholder: string }) => (
    <div className={styles.input}>
        <div className={styles.hline}></div>
        <input placeholder={placeholder} />
        <div className={styles.hline}></div>
    </div>
)

export default function ContactUs() {
    return (
        <div className={styles.contactUs}>
            <h1 className={globalStyles.header}>Contact Us</h1>
            <form className={styles.form}>
                <Input placeholder={"Name"} />
                <Input placeholder={"Email"} />
                <Input placeholder={"Estimate budget"} />
                <Input placeholder={"About your project"} />

                <input
                    type="submit"
                    className={clsx(styles.submit, globalStyles.header)}
                    value={"Send request"}
                />
            </form>
        </div>
    )
}