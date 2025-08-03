import { Header } from "@/components/shared/header";
import { Intro } from "@/components/sections/main/intro";
import { AboutUs } from "@/components/sections/main/aboutUs";

import styles from "./page.module.scss";
import { Hline } from "@/components/shared/hline";
import { Projects } from "@/components/sections/main/projects";
import { TechnologyCarousel } from "@/components/sections/main/technologyCarousel";
import { Platforms } from "@/components/sections/main/platforms";
import { ContactUs } from "@/components/sections/main/contactUs";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <Intro />

      <Hline />
      <AboutUs />

      <Hline header="Our Projects" />

      <Projects />

      <Hline />
      <TechnologyCarousel />
      <Hline />

      <Platforms />

      <ContactUs />

      <Footer />
    </div>
  );
}