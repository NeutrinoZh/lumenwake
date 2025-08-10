'use client'

import styles from "./projects.module.scss"

import { useRouter } from 'next/navigation';

import SpaceBacPreview from "@/public/spacebac-preview.png"
import FarmMergerPreview from "@/public/farmmerger-preview.png"

import Image, { StaticImageData } from "next/image";

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
    return (
        <div className={styles.projects}>
            <div className={styles.projectsContainer}>
                <Project key={123} preview={SpaceBacPreview} url="./projects/space-bac" />
                <Project key={124} preview={FarmMergerPreview} url="./projects/farm-merger" />
            </div>
        </div>
    )
}