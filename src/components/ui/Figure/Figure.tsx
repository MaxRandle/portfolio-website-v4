import NextImage from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const FigureVariants = cva(["relative overflow-hidden rounded-lg"], {
  variants: {},
});

export type FigureProps = React.ComponentPropsWithoutRef<"figure"> &
  VariantProps<typeof FigureVariants> &
  Pick<
    React.ComponentPropsWithoutRef<typeof NextImage>,
    "src" | "alt" | "priority"
  > &
  Required<
    Pick<React.ComponentPropsWithoutRef<typeof NextImage>, "width" | "height">
  >;

export const Figure = React.forwardRef<React.ElementRef<"figure">, FigureProps>(
  ({ className, src, alt, width, height, priority, ...props }, ref) => {
    const classes = FigureVariants({});

    return (
      <figure ref={ref} className={twMerge(classes, className)} {...props}>
        <NextImage
          className="absolute left-0 top-0 h-full w-full object-cover"
          src={src}
          alt={alt}
          priority={priority}
          width={width}
          height={height}
        />
      </figure>
    );
  }
);

Figure.displayName = "Figure";
