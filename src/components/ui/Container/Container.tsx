import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const ContainerVariants = cva(["container"], { variants: {} });

export type ContainerProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof ContainerVariants>;

export const Container = React.forwardRef<
  React.ElementRef<"div">,
  ContainerProps
>(({ className, ...props }, ref) => {
  const classes = ContainerVariants({});

  return <div ref={ref} className={twMerge(classes, className)} {...props} />;
});

Container.displayName = "Container";
