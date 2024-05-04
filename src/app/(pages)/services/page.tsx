'use client';

import Footer from '@/app/components/footer/footer';
import Link from 'next/link';
import { Code, Computer, ScanEye } from 'lucide-react';
import { motion } from 'framer-motion';

// TODO: setup SEO

export default function Component() {
  const TRANSITION_DURATION: number = 0.3; // secs
  const TRANSITION_DELAY: number = 0.4;
  const transition = {
    duration: TRANSITION_DURATION,
    delay: TRANSITION_DELAY,
  };
  return (
    <>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="px-4 md:px-6">
          <div className="space-y-6 text-center">
            <div className="space-y-2 mx-auto max-w-2xl">
              <div className="space-y-2">
                <motion.h2
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={transition}
                  className="dimmed-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Expert Consulting. Custom Solutions.
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={transition}
                  className="dimmed-1  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Our team of experts is here to help you succeed. From
                  architecting scalable APIs to designing beautiful user
                  interfaces, we have the skills and experience to bring your
                  ideas to life.
                </motion.p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 1,
            }}
            className="grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mx-auto items-start justify-center py-8 md:py-12 lg:py-16 px-4 md:px-6"
          >
            <Link
              href="#"
              className="border order-white/10b p-4 rounded-[2rem] glowsup-dimmed slower-transition hover:slower-translate hover:scale-110 slower-transition shadow hover:shadow-[0px_4px_88px_0px_var(--deeper-purple)]"
            >
              <div className="flex flex-col gap-2 m-1 items-center">
                <ScanEye className="w-10 h-10 mx-auto" />
                <h3 className="dimmed-4 text-2xl font-bold">Consulting</h3>
                <p className="text-center md:text-base/relaxed dimmed-1">
                  Migrate to the cloud with confidence. Our team can help you
                  design and deploy a scalable, secure architecture.
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="border order-white/10b p-4 rounded-[2rem] glowsup-dimmed slower-transition hover:slower-translate hover:scale-110 slower-transition shadow hover:shadow-[0px_4px_88px_0px_var(--deeper-purple)]"
            >
              <div className="flex flex-col gap-2 m-1 items-center">
                <Code className="w-10 h-10 mx-auto" />
                <h3 className="dimmed-4 text-2xl font-bold">Code Audits</h3>
                <p className="text-center md:text-base/relaxed dimmed-1">
                  Migrate to the cloud with confidence. Our team can help you
                  design and deploy a scalable, secure architecture.
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="border order-white/10b p-4 rounded-[2rem] glowsup-dimmed slower-transition hover:slower-translate hover:scale-110 slower-transition shadow hover:shadow-[0px_4px_88px_0px_var(--deeper-purple)]"
            >
              <div className="flex flex-col gap-2 m-1 items-center">
                <Computer className="w-10 h-10 mx-auto" />
                <h3 className="text-2xl font-bold  dimmed-4">
                  Software Solutions
                </h3>
                <p className="text-center md:text-base/relaxed dimmed-1">
                  End-to-end software solutions tailored to meet your specific
                  needs. From small to medium size commercial projects.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
