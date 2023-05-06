import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const RadixUiLogoVariants = cva([""], { variants: {} });

type RadixUiLogoProps = React.ComponentPropsWithoutRef<"svg"> &
  VariantProps<typeof RadixUiLogoVariants> & {
    size?: number;
  };

export const RadixUiLogo = React.forwardRef<
  React.ElementRef<"svg">,
  RadixUiLogoProps
>(({ className, size, ...props }, ref) => {
  const classes = RadixUiLogoVariants({});

  return (
    <svg
      ref={ref}
      className={twMerge(classes, className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="currentcolor"
      {...props}
    >
      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
      <path d="M12 0H4V8H12V0Z"></path>
      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
    </svg>
  );
});

RadixUiLogo.displayName = "RadixUiLogo";
