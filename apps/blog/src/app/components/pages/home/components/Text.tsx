import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export function Text({ children }: PropsWithChildren<NonNullable<unknown>>) {
  return (
    <motion.p
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="dimmed-3 mx-2 my-1 max-w-[700px] p-2 font-normal"
    >
      {children}
    </motion.p>
  );
}
