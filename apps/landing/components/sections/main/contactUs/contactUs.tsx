import styles from "./contactUs.module.scss";
import globalStyles from "@/app/variables.module.scss"
import { Button } from "@/components/shared/button";
import Heading from "@/components/shared/heading/heading";

const Input = ({ placeholder }: { placeholder: string }) => (
    <div className={styles.input}>
        <div className={styles.hline}></div>
        <input placeholder={placeholder} />
        <div className={styles.hline}></div>
    </div>
)

export default function ContactUs() {
    return (
        <div id="contact-us" className={styles.contactUs}>
            <Heading className={styles.title}>Contact Us</Heading>
            <form className={styles.form}>
                <Input placeholder={"Name"} />
                <Input placeholder={"Email"} />
                <Input placeholder={"Estimate budget"} />
                <Input placeholder={"About your project"} />

                <Button
                    className={styles.submit}
                    value="Send request"
                />
            </form>
        </div>
    )
}