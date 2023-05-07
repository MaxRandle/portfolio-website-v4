import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const BadgeVariants = cva(
  [
    "bg-primary-300 text-primary-1100",
    "dark:bg-primary-1300 dark:text-primary-400",
    "rounded-full h-6 text-sm px-3 inline-flex items-center justify-center",
  ],
  {
    variants: {},
  }
);

export type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof BadgeVariants>;

export const Badge = React.forwardRef<React.ElementRef<"span">, BadgeProps>(
  ({ className, ...props }, ref) => {
    const classes = BadgeVariants({});

    return (
      <span ref={ref} className={twMerge(classes, className)} {...props} />
    );
  }
);

Badge.displayName = "Badge";
