import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Intro } from "@/components/sections/portfolio/intro"

import styles from "./page.module.scss";
import { Hline } from "@/components/shared/hline";
import { Categories } from "@/components/sections/portfolio/categories";

export default function Portfolio() {
    return (
        <div className={styles.page}>
            <Header />

            <Intro />

            <Hline />

            <Categories />

            <Footer />
        </div>
    );
}