import { useRef, useEffect } from "react";

export default function RayEffect() {
    return (
        <video
            width="1920"
            height="1080"
            autoPlay
            muted
            loop
        >
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}