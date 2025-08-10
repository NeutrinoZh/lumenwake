import styles from "./heading.module.scss"
import clsx from "clsx";

interface HeadingProps extends React.ComponentProps<'h1'> { }

export default function Heading({
    children, className
}: HeadingProps) {
    return (
        <h1 className={clsx(styles.heading, className)}>{children}</h1>
    )
}