import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionVariants = cva("my-32 sm:my-60", {
  variants: {
    /**
     * @summary specifies the background color
     */
    palette: {
      surface: ["my-0 sm:my-0 py-32 sm:py-60", "bg-base-200 dark:bg-base-1500"],
      primary: [
        "my-0 sm:my-0 py-32 sm:py-60",
        "bg-primary-1200 dark:bg-primary-1500",
        "group/darkmode",
      ],
    },
  },
});

export type SectionProps = React.ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof SectionVariants>;

export const Section = React.forwardRef<
  React.ElementRef<"section">,
  SectionProps
>(({ className, palette, ...props }, ref) => {
  const classes = SectionVariants({ palette });

  return (
    <section ref={ref} className={twMerge(classes, className)} {...props} />
  );
});

Section.displayName = "Section";
