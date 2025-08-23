'use client'

import styles from "./projects.module.scss"

import { useRouter } from 'next/navigation';

import Image, { StaticImageData } from "next/image";
import staticData from "@/staticData/staticData";

interface ProjectParams {
    preview: StaticImageData,
    url: string
}

const Project = ({ preview, url }: ProjectParams) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(url)
    }

    return (
        <div className={styles.project} onClick={handleClick}>
            <Image
                src={preview.src}
                alt="Preview"
                width={625}
                height={325}
            />
        </div>
    )
}

export default function Projects() {
    const projectsData = staticData.projects;

    return (
        <div className={styles.projects}>
            <div className={styles.projectsContainer}>
                {
                    projectsData.map(project =>
                        <Project
                            key={project.id}
                            preview={project.poster}
                            url={`./projects/${project.id}`}
                        />
                    )
                }
            </div>
        </div>
    )
}