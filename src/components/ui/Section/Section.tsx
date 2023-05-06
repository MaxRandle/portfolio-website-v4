import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionVariants = cva("my-20 sm:my-32", {
  variants: {
    /**
     * @summary specifies the background color
     */
    palette: {
      surface: ["my-0 sm:my-0 py-20 sm:py-32", "bg-base-200 dark:bg-base-1500"],
      primary: [
        "my-0 sm:my-0 py-20 sm:py-32",
        "bg-primary-1200 dark:bg-primary-1500",
        "group/darkmode",
      ],
    },
  },
});

export type SectionProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof SectionVariants>;

export const Section = React.forwardRef<React.ElementRef<"div">, SectionProps>(
  ({ className, palette, ...props }, ref) => {
    const classes = SectionVariants({ palette });

    return <div ref={ref} className={twMerge(classes, className)} {...props} />;
  }
);

Section.displayName = "Section";
