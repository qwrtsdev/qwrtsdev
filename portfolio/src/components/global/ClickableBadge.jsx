"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const animationProps = {
    whileTap: { scale: 0.95 },

    transition: {
        scale: {
            type: "spring",
            stiffness: 200,
            damping: 5,
            mass: 0.5,
        },
    },
};

export const ClickableButton = React.forwardRef(
    ({ children, className, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                className={cn(
                    "relative rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-lg",
                    className,
                )}
                {...animationProps}
                {...props}
            >
                <span className="">{children}</span>
            </motion.button>
        );
    },
);

ClickableButton.displayName = "ClickableButton";
