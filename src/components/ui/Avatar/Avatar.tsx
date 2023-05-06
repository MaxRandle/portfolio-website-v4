import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";
import { type VariantProps, cva } from "class-variance-authority";

const AvatarVariants = cva(
  [
    "text-primary-1000 dark:text-primary-600",
    "bg-primary-300 dark:bg-base-1400 ring-base-100 dark:ring-base-1600",
    "relative shrink-0 overflow-hidden inline-block rounded-full",
    "group-[]/avatar-group:first:ml-0",
  ],
  {
    variants: {
      size: {
        sm: [
          "text-lg w-12 h-12",
          "group-[]/avatar-group:-ml-2",
          "group-[]/avatar-group:ring-4",
          "group-[]/avatar-container:mr-3",
        ],
        md: [
          "text-xl w-16 h-16",
          "group-[]/avatar-group:-ml-4",
          "group-[]/avatar-group:ring-4",
          "group-[]/avatar-container:mr-4",
        ],
        lg: [
          "text-2xl w-20 h-20",
          "group-[]/avatar-group:-ml-5",
          "group-[]/avatar-group:ring-4",
          "group-[]/avatar-container:mr-4",
        ],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type AvatarRootProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
>;

type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

export type AvatarProps = AvatarRootProps &
  Pick<AvatarImageProps, "src" | "alt"> &
  VariantProps<typeof AvatarVariants>;

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  children,
  className,
  size,
  ...props
}) => {
  const classes = AvatarVariants({ size });

  return (
    <AvatarPrimitive.Root className={twMerge(classes, className)} {...props}>
      <AvatarPrimitive.Image
        className="aspect-square h-full w-full"
        src={src}
        alt={alt}
      />
      <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full">
        {children}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
