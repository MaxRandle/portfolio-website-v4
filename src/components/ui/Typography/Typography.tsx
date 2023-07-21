import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const TypographyClasses = cva("text-base", {
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
      subheading: "text-lg sm:text-xl",
      body: "text-base sm:text-lg",
      caption: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    palette: "weak",
    level: "body",
  },
});

export type TypographyProps = React.ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof TypographyClasses>;

export const Typography = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ palette, level, className, ...props }, ref) => {
  const classes = TypographyClasses({ palette, level });

  return <p ref={ref} className={twMerge(classes, className)} {...props} />;
});
Typography.displayName = "Typography";
