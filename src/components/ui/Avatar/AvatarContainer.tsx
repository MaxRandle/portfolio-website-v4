import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const AvatarContainerVariants = cva(
  ["flex items-center group/avatar-container"],
  {
    variants: {},
  }
);

export type AvatarContainerProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof AvatarContainerVariants>;

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
  className,
  ...props
}) => {
  const classes = AvatarContainerVariants({});

  return <div className={twMerge(classes, className)} {...props} />;
};
