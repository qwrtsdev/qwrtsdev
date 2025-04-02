"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

/**
 * The InteractiveGridPattern component.
 *
 * @returns A React component that displays a centered grid pattern.
 */
export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares = [24, 24],
    className,
    squaresClassName,
    ...props
}) {
    const [horizontal, vertical] = squares;
    const [hoveredSquare, setHoveredSquare] = useState(null);

    // Calculate total grid size
    const totalWidth = width * horizontal;
    const totalHeight = height * vertical;

    return (
        <svg
            width={totalWidth}
            height={totalHeight}
            viewBox={`0 0 ${totalWidth} ${totalHeight}`}
            className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                className,
            )}
            {...props}
        >
            {Array.from({ length: horizontal * vertical }).map((_, index) => {
                const x = (index % horizontal) * width;
                const y = Math.floor(index / horizontal) * height;
                return (
                    <rect
                        key={index}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        className={cn(
                            "stroke-gray-400/5 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
                            hoveredSquare === index
                                ? "fill-gray-300/5"
                                : "fill-transparent",
                            squaresClassName,
                        )}
                        onMouseEnter={() => setHoveredSquare(index)}
                        onMouseLeave={() => setHoveredSquare(null)}
                    />
                );
            })}
        </svg>
    );
}
