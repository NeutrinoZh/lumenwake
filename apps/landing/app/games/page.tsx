import { Header } from "@/components/shared/header";
import { Intro } from "@/components/sections/games/intro";
import { Footer } from "@/components/shared/footer";

import styles from "./page.module.scss";
import { Hline } from "@/components/shared/hline";
import { Projects } from "@/components/sections/games/projects";

export default function Games() {
    return (
        <div className={styles.page}>
            <Header />

            <Intro />

            <Hline header="Our Projects" />

            <Projects />

            <Footer />
        </div>
    );
}