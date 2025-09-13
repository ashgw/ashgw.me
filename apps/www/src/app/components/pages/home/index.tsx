"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useCopyToClipboard } from "react-use";
import { toast, Toaster } from "sonner";

import { TextContent } from "@ashgw/components";
import { email, links } from "@ashgw/constants";

import Link from "./components/Link";
import { env } from "@ashgw/env";

export function HomePage() {
  const [, copyToClipboard] = useCopyToClipboard();

  const emailAddress = useMemo(
    () => (email.startsWith("mailto:") ? email.slice(7) : email),
    [],
  );

  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    copyToClipboard(emailAddress);
    toast.success("Email copied to clipboard");
  };

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="-mt-8 flex min-h-screen w-full items-center justify-center px-4 md:px-6">
          <div className="space-y-6 text-center">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="my-2 text-5xl font-bold leading-10"
                >
                  <code>~</code>
                </motion.h1>
                <div className="mx-auto max-w-[600px]">
                  <TextContent>
                    I just pushed some new content to my{" "}
                    <Link href={links.gitHub.link} name="Onlyfans" />
                    <br /> You might want to read my{" "}
                    <Link href={env.NEXT_PUBLIC_BLOG_URL} name="blog" />
                    <br />
                    Shoot me an{" "}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email to clipboard"
                    >
                      <strong className="glows text-white underline">
                        email
                      </strong>
                    </button>
                  </TextContent>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Toaster />
    </div>
  );
}
