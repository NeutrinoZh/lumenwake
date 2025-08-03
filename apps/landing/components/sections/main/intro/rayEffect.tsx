import { useRef, useEffect } from "react";

export default function RayEffect() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;

        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;

        let animationFrameId: number;
        let tick = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.75;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const drawArc = (
            y: number,
            color1: string,
            color2: string,
            radius: number,
            intensity = 1
        ) => {
            const w = canvas.width;
            const gradient = ctx.createRadialGradient(w / 2, y, 0, w / 2, y, radius);
            gradient.addColorStop(0, color1);
            gradient.addColorStop(1, color2);
            ctx.globalAlpha = intensity;
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(w / 2, y, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        };

        const drawRay = () => {
            const w = canvas.width;
            const h = canvas.height;
            const step = 10;

            ctx.beginPath();

            ctx.moveTo(0, 0);

            for (let i = 0; i < w / step; ++i) {
                ctx.lineTo(i * step, h / 2 + 1 / (i * step / 10000));
            }

            for (let i = w / step; i > 0; --i) {
                ctx.lineTo(i * step, h / 2 - 1 / (i * step / 10000));
            }

            ctx.fillStyle = "white";
            ctx.shadowColor = "white";
            ctx.shadowBlur = 30;
            ctx.fill();
        }

        const draw = () => {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const beamY = h / 2 + Math.sin(tick * 0.02) * 10;
            const beamHeight = 5 + Math.abs(Math.sin(tick * 0.05)) * 20;

            ctx.save();

            // const numLines = 5;
            // const spacing = 10;

            // for (let j = 0; j < numLines; j++) {
            //     const offsetY = -((numLines - 1) * spacing) / 2 + j * spacing;

            //     ctx.beginPath();

            //     const p0 = { x: 0, y: offsetY };
            //     const p1 = { x: w * 0.15, y: h * 0.1 + offsetY * 1.2 };
            //     const p2 = { x: w * 0.35, y: h / 2 + offsetY * 0.5 };
            //     const p3 = { x: w, y: h / 2 + offsetY };

            //     ctx.moveTo(p0.x, p0.y);
            //     ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

            //     const gradient = ctx.createLinearGradient(p0.x, p0.y, p3.x, p3.y);
            //     gradient.addColorStop(0.0, `rgba(255, 255, 255, 0.4)`);
            //     gradient.addColorStop(0.3, `rgba(159, 80, 255, 0.52)`);
            //     gradient.addColorStop(0.7, `rgba(120, 140, 255, 0.37)`);
            //     gradient.addColorStop(1.0, `rgba(255, 255, 255, 0.18)`);

            //     ctx.strokeStyle = gradient;
            //     ctx.lineWidth = 2 + Math.sin(j + tick * 0.05) * 1;
            //     ctx.shadowColor = "white";
            //     ctx.shadowBlur = 15;
            //     ctx.stroke();
            // }

            // ctx.restore();

            drawRay();

            ctx.restore();

            tick++;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas ref={canvasRef} />
    )
}