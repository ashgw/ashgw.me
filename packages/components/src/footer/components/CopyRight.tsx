"use client";

import { motion } from "framer-motion";

import { creator } from "@ashgw/constants";

export function CopyRight() {
  return (
    <motion.div
      viewport={{ once: true }} // only run once per load
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <p className="text-secondary-center text-dim-300 flex items-center justify-center text-sm">
        &copy; {new Date().getFullYear()} {creator}. All rights reserved
      </p>
    </motion.div>
  );
}
