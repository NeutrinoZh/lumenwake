import styles from "./contactUs.module.scss";
import globalStyles from "@/app/variables.module.scss"
import { Button } from "@/components/shared/button";
import Heading from "@/components/shared/heading/heading";

interface InputProps extends React.ComponentProps<'input'> {
}

const Input = ({ ...rest }: InputProps) => (
    <div className={styles.input}>
        <div className={styles.hline}></div>
        <input {...rest} />
        <div className={styles.hline}></div>
    </div>
)

export default function ContactUs() {
    return (
        <div id="contact-us" className={styles.contactUs}>
            <Heading className={styles.title}>Contact Us</Heading>
            <form
                className={styles.form}
                action="https://formspree.io/f/meoznkyk"
                method="POST"
            >
                <Input required name="name" placeholder={"Name"} />
                <Input required name="email" type="email" placeholder={"Email"} />
                <Input required name="estimate-budget" placeholder={"Estimate budget"} />
                <Input required name="about-project" placeholder={"About your project"} />

                <Button
                    className={styles.submit}
                    value="Send request"
                />
            </form>
        </div>
    )
}