import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const DividerVariants = cva(["border-base-300 dark:border-base-1300"], {
  variants: {},
});

export type DividerProps = React.ComponentPropsWithoutRef<"hr"> &
  VariantProps<typeof DividerVariants>;

export const Divider = React.forwardRef<React.ElementRef<"hr">, DividerProps>(
  ({ className, ...props }, ref) => {
    const classes = DividerVariants({});

    return <hr ref={ref} className={twMerge(classes, className)} {...props} />;
  }
);

Divider.displayName = "Divider";
