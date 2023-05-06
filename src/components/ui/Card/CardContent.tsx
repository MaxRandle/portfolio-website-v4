import { twMerge } from "tailwind-merge";

export type CardContentProps = React.ComponentPropsWithoutRef<"div">;

export const CardContent: React.FC<CardContentProps> = ({
  className,
  ...props
}) => {
  const classes = "p-6";

  return <div className={twMerge(classes, className)} {...props} />;
};
