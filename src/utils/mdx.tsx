import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// TODO move this to a nicer home
const EmbedVariants = cva(["mt-8"], {
  variants: {
    width: {
      full: "w-full",
      fixed: "w-[32rem] max-w-full mx-auto",
    },
    aspect: {
      square: "aspect-square",
      video: "aspect-video",
    },
  },
});

export type EmbedProps = React.ComponentProps<"iframe"> &
  VariantProps<typeof EmbedVariants>;

export const Embed: React.FC<EmbedProps> = ({
  className,
  width,
  aspect,
  ...props
}) => {
  const classes = EmbedVariants({ width, aspect });

  return <iframe className={twMerge(classes, className)} {...props} />;
};
