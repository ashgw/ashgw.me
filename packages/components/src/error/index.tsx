"use client";

import type NextError from "next/error";
import { useEffect } from "react";

import { monitor } from "@ashgw/monitor";
import { Button, toast } from "@ashgw/ui";

export interface GlobalErrorProperties {
  readonly error: NextError & { digest?: string };
  readonly reset?: () => void;
}

export const ErrorBoundary = ({ error, reset }: GlobalErrorProperties) => {
  useEffect(() => {
    toast.message(
      monitor.next.captureException({
        error,
      }),
    );
  }, [error]);

  const handleReset = () => {
    if (reset) {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <div
      className="text-dim-300 flex h-screen w-full scale-150 flex-col items-center justify-center text-center"
      style={{
        padding: "40px 20px",
        gap: "20px",
      }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: "20px",
        }}
      >
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="max-w-md">
          I've logged this error and will look into it as soon as possible.
        </p>
      </div>
      <Button variant="default" onClick={handleReset}>
        Try again
      </Button>
    </div>
  );
};
