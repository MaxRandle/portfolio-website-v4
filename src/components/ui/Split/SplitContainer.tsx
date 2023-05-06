import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const SplitContainerVariants = cva(["flex w-full flex-col gap-6"], {
  variants: {
    breakpoint: {
      sm: "sm:gap-10 sm:grid sm:grid-cols-2 sm:grid-flow-dense sm:items-center sm:justify-center",
      md: "md:gap-10 md:grid md:grid-cols-2 md:grid-flow-dense md:items-center md:justify-center",
    },
  },
  defaultVariants: {
    breakpoint: "md",
  },
});

export type SplitContainerProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof SplitContainerVariants>;

export const SplitContainer = React.forwardRef<
  React.ElementRef<"div">,
  SplitContainerProps
>(({ className, breakpoint, ...props }, ref) => {
  const classes = SplitContainerVariants({ breakpoint });

  return <div ref={ref} className={twMerge(classes, className)} {...props} />;
});

SplitContainer.displayName = "SplitContainer";
