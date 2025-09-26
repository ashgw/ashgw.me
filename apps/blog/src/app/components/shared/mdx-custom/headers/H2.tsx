"use client";

import React from "react";
import { motion } from "@ashgw/design/motion";

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
      className="text-dim-400 text-3xl font-bold"
    >
      {children}
    </motion.h2>
  );
}
