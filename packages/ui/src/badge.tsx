import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@ashgw/ui";

const badgeVariants = cva(
  "pointer-events-none inline-flex items-center rounded-full border px-2.5 py-0.5 text-[1.1rem] font-semibold",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",
        outline: "text-foreground",
        outlineUpdated: "border-2 border-green-400 text-green-400",
        outlineArchive: "border-2 border-amber-400 text-amber-400",
        success:
          "text-secondary border-transparent bg-green-400 font-bold hover:bg-green-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), "px-4 py-2", className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
