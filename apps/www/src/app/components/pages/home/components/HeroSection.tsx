"use client";

import { motion } from "framer-motion";

import { Button } from "@ashgw/ui";

import { Text } from "./Text";
import { TypingAnimation } from "./TypingAnimation";

export function HeroSection() {
  const TRANSITION_DURATION = 0.3;
  const TRANSITION_DELAY = 0.4;
  const transition = {
    duration: TRANSITION_DURATION,
    delay: TRANSITION_DELAY,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
    >
      <div className="container px-4 md:px-4">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
            >
              <h1 className="text-5xl font-bold tracking-tighter md:text-5xl lg:text-6xl/none xl:text-[5rem]">
                <span className="dimmed-4">Welcome to my corner</span>
              </h1>
              <h1 className="text-5xl font-bold tracking-tighter md:text-5xl lg:text-6xl/none xl:text-[5rem]">
                <TypingAnimation />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
            >
              <Text>
                Thanks for stopping by. This serves as my brain dump for a thing
                or two I learned throughout the years. Thoughts, experiments,
                and conclusions. Have a look around, if you like what you see.
              </Text>
            </motion.div>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <motion.div
              className="grid gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 3 }}
            >
              <Button
                className="glowsup w-full"
                variant="navbar"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Let&apos;s talk
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
