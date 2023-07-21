import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const HeadingClasses = cva("text-base", {
  variants: {
    /**
     * @summary specifies the color of the text. Defaults to `weak`
     */
    palette: {
      inherit: "",
      base: "text-black dark:text-white group-[]/darkmode:text-white",
      weak: "text-base-1200 dark:text-base-400 group-[]/darkmode:text-base-400",
      weaker:
        "text-base-1100 dark:text-base-600 group-[]/darkmode:text-base-600",
      primary:
        "text-primary-1100 dark:text-primary-600 group-[]/darkmode:text-primary-600",
    },
    /**
     * @summary specifies the size of the text. Defaults to `body`
     */
    level: {
      h1: "text-5xl sm:text-6xl font-light tracking-tight",
      h2: "text-3xl sm:text-4xl font-light tracking-tight",
      h3: "text-xl sm:text-2xl font-light",
    },
  },
  defaultVariants: {
    palette: "weak",
    level: "h3",
  },
});

export type HeadingProps = React.ComponentPropsWithoutRef<"h1" | "h2" | "h3"> &
  VariantProps<typeof HeadingClasses> & {
    /**
     * @summary informs the dom type. Defaults to `p`
     */
    as?: "h3" | "h2" | "h1";
  };

export const Heading = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ palette, level, as, className, ...props }, ref) => {
    const classes = HeadingClasses({ palette, level });

    const Component = as ?? level ?? "h3";

    return (
      <Component ref={ref} className={twMerge(classes, className)} {...props} />
    );
  }
);
Heading.displayName = "Heading";
