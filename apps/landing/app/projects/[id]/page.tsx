import styles from "./page.module.scss";
import staticData from "@/staticData/staticData";

import { Header } from "@/components/shared/header";
import { Intro } from "@/components/sections/project/intro";
import { Hline } from "@/components/shared/hline"
import { Footer } from "@/components/shared/footer";
import { About } from "@/components/sections/project/about";
import { Gallery } from "@/components/sections/project/gallery";

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
                    <Gallery
                        screenshots={project.screenshots}
                        isMobile={project.isMobile}
                    />
                    <Footer />
                </> : <div className={styles.notFound}>
                    Project doesn't exist
                </div>
            }

        </div>
    )
}