import { useRef, useEffect } from "react";

export default function RayEffect() {
    return (
        <video
            autoPlay
            muted
            loop
            playsInline
        >
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}