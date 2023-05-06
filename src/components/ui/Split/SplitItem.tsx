import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const SplitItemVariants = cva([""], {
  variants: {
    side: {
      left: "sm:col-start-1",
      right: "sm:col-start-2",
    },
  },
});

export type SplitItemProps = React.ComponentPropsWithoutRef<"div"> &
  Required<VariantProps<typeof SplitItemVariants>>;

export const SplitItem = React.forwardRef<
  React.ElementRef<"div">,
  SplitItemProps
>(({ className, side, ...props }, ref) => {
  const classes = SplitItemVariants({ side });

  return <div ref={ref} className={twMerge(classes, className)} {...props} />;
});

SplitItem.displayName = "SplitItem";
