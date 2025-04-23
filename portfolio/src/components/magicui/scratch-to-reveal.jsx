"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const ScratchToReveal = ({
    width,
    height,
    minScratchPercentage = 50,
    onComplete,
    children,
    className,
    gradientColors = ["#A97CF8", "#F38CB8", "#FDCC92"],
}) => {
    const canvasRef = useRef(null);
    const [isScratching, setIsScratching] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const controls = useAnimation();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (canvas && ctx) {
            const gradient = ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height,
            );
            gradient.addColorStop(0, gradientColors[0]);
            gradient.addColorStop(0.5, gradientColors[1]);
            gradient.addColorStop(1, gradientColors[2]);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, [gradientColors]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleMouseMove = (event) => {
            if (!isScratching) return;
            scratch(event.clientX, event.clientY);
        };

        const handleTouchMove = (event) => {
            if (!isScratching) return;
            const touch = event.touches[0];
            scratch(touch.clientX, touch.clientY);
        };

        const stopScratching = () => {
            setIsScratching(false);
            checkCompletion();
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("touchmove", handleTouchMove);
        canvas.addEventListener("mouseup", stopScratching);
        canvas.addEventListener("touchend", stopScratching);
        canvas.addEventListener("touchcancel", stopScratching);

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("touchmove", handleTouchMove);
            canvas.removeEventListener("mouseup", stopScratching);
            canvas.removeEventListener("touchend", stopScratching);
            canvas.removeEventListener("touchcancel", stopScratching);
        };
    }, [isScratching]);

    const handleMouseDown = () => setIsScratching(true);
    const handleTouchStart = () => setIsScratching(true);

    const scratch = (clientX, clientY) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (canvas && ctx) {
            const rect = canvas.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    const checkCompletion = () => {
        if (isComplete) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (canvas && ctx) {
            const imageData = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height,
            );
            const pixels = imageData.data;
            const totalPixels = pixels.length / 4;
            let clearPixels = 0;

            for (let i = 3; i < pixels.length; i += 4) {
                if (pixels[i] === 0) clearPixels++;
            }

            const percentage = (clearPixels / totalPixels) * 100;

            if (percentage >= minScratchPercentage) {
                setIsComplete(true);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                startAnimation();
            }
        }
    };

    const startAnimation = async () => {
        await controls.start({
            scale: [1, 1.5, 1],
            rotate: [0, 10, -10, 10, -10, 0],
            transition: { duration: 0.5 },
        });

        if (onComplete) {
            onComplete();
        }
    };

    return (
        <motion.div
            className={cn("relative select-none", className)}
            style={{
                width,
                height,
                cursor: "pointer",
            }}
            animate={controls}
        >
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="pointer-events-auto absolute left-0 top-0 z-10"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            />
            <div className="relative z-0 h-full w-full">{children}</div>
        </motion.div>
    );
};
