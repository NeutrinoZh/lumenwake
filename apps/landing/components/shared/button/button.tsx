import Heading from "../heading/heading"
import styles from "./button.module.scss"
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<'button'> {
    value: string
}

export default function Button({
    value, className, ...rest
}: ButtonProps) {
    return <button className={clsx(styles.button, className)} {...rest}>
        <Heading>{value}</Heading>
    </button>
}