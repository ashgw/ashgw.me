"use client";

import React from "react";
import { motion } from "framer-motion";

import type { HProps } from "./types";

export function H2({ children, id }: HProps) {
  return (
    <motion.h2
      animate={{
        opacity: 1,
        x: 0,
      }}
      initial={{
        opacity: 0,
        x: -30,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      id={id}
      className="dimmed-4 text-3xl font-bold"
    >
      {children}
    </motion.h2>
  );
}
