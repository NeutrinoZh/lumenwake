'use client'

import Arrow from "@/public/left-arrow.png"

import staticData from "@/staticData/staticData";
import styles from "./projects.module.scss";

import clsx from "clsx";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/shared/button";
import { Text } from "@/components/shared/text"

interface ArrowComponentProps {
    cls: string | undefined;
    onClick?: () => void;
}

const ArrowComponent = ({
    cls,
    onClick
}: ArrowComponentProps) => (
    <div className={clsx(styles.arrow, cls)} onClick={onClick}>
        <Image
            src={Arrow.src}
            width={26}
            height={90}
            alt="Arrow"
        />
    </div >
)

interface GameDescriptionProps {
    title: string,
    description: string,
    character: StaticImageData,
    id: string
}

const GameDescription = ({
    title,
    description,
    character,
    id
}: GameDescriptionProps) => {
    const router = useRouter();

    function openDetails() {
        router.push(`/projects/${id}`)
    }

    return (
        <div className={styles.content}>
            <div className={styles.description}>
                <Heading className={styles.title}>{title}</Heading>
                <Text>
                    {description}
                </Text>

                <Button
                    value="See details"
                    onClick={openDetails}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={character}
                    width={512}
                    height={512}
                    alt=""
                />
            </div>
        </div>
    )
}

export default function Projects() {
    const projectsData = staticData.projects;

    const [index, setIndex] = useState(0)

    function shift(amount: number) {
        setIndex(prev => (prev + amount + projectsData.length) % projectsData.length)
    }

    return (
        <div className={styles.projects} id="projects">
            <ArrowComponent cls={styles.leftArrow} onClick={() => shift(-1)} />

            {
                projectsData[index] ?
                    <GameDescription
                        title={projectsData[index].name}
                        description={projectsData[index].description}
                        character={projectsData[index].character}
                        id={projectsData[index].id}
                    /> : <>
                        Project Not Found
                    </>
            }

            <ArrowComponent cls={styles.rightArrow} onClick={() => shift(1)} />
        </div>
    )
}