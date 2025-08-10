import styles from "./page.module.scss";
import staticData from "@/staticData/staticData";

import { Header } from "@/components/shared/header";
import { Intro } from "@/components/sections/project/intro";
import { Hline } from "@/components/shared/hline"
import { AboutUs } from "@/components/sections/main/aboutUs"
import { Footer } from "@/components/shared/footer";
import { About } from "@/components/sections/project/about";

interface ProjectPageProps {
    params: {
        id: string
    }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = staticData.projects.find(item => item.id == params.id)

    return (
        <div className={styles.page}>

            <Header />

            {
                project ? <>
                    <Intro
                        preview={project.poster}
                        title={project.name}
                    />
                    <Hline />
                    <About
                        description={project.description}
                        characterPhoto={project.character}
                    />
                    <Hline header="Gallery" />
                    <AboutUs />
                    <Footer />
                </> : <div className={styles.notFound}>
                    Project doesn't exist
                </div>
            }

        </div>
    )
}