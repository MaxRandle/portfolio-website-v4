import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";
import React from "react";

const CardVariants = cva(
  ["rounded-lg overflow-hidden border border-base-400 dark:border-base-1300"],
  {
    variants: {
      palette: {
        base: "bg-base-100 dark:bg-base-1600",
        surface: "bg-base-200 dark:bg-base-1500",
      },
      elevation: {
        flat: "",
        low: "shadow-sm dark:shadow-glow-md",
        high: "shadow-lg dark:shadow-glow-lg",
      },
    },
    defaultVariants: {
      palette: "surface",
      elevation: "low",
    },
  }
);

export type CardProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof CardVariants>;

export const Card = React.forwardRef<React.ElementRef<"div">, CardProps>(
  ({ className, palette, elevation, ...props }, ref) => {
    const classes = CardVariants({ palette, elevation });

    return <div ref={ref} className={twMerge(classes, className)} {...props} />;
  }
);

Card.displayName = "Card";

export type CardLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof CardVariants>;

export const CardLink = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  CardLinkProps
>(({ className, palette, elevation, ...props }, ref) => {
  const focusClasses = [
    "focus-visible:outline-none focus-visible:ring-4",
    "focus-visible:border-primary-500 ring-primary-300",
    "dark:focus-visible:border-primary-700 dark:ring-primary-1300",
  ];

  const classes = CardVariants({ palette, elevation });

  return (
    <NextLink
      ref={ref}
      className={twMerge(focusClasses, classes, className)}
      {...props}
    />
  );
});

CardLink.displayName = "CardLink";
