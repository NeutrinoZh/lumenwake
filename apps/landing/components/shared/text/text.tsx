import styles from "./text.module.scss"
import clsx from "clsx";

interface TextProps extends React.ComponentProps<'p'> { }

export default function Text({
    children, className
}: TextProps) {
    return (
        <p className={clsx(styles.text, className)}>{children}</p>
    )
}