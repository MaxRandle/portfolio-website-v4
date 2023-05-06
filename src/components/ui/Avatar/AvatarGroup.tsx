import { twMerge } from "tailwind-merge";

export type AvatarGroupProps = React.ComponentPropsWithoutRef<"div">;

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  className,
  ...props
}) => {
  const classes = twMerge("group/avatar-group flex", className);
  return <div className={classes} {...props} />;
};
