import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

const LinkVariants = cva([
  "text-primary-1000 dark:text-primary-700 group-[]/darkmode:text-primary-700",
  "font-bold tracking-wide",
]);

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof LinkVariants>;

export const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  const classes = LinkVariants({});

  return <NextLink className={twMerge(classes, className)} {...props} />;
};

export type AnchorLinkProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof LinkVariants>;

export const AnchorLink: React.FC<AnchorLinkProps> = ({
  className,
  ...props
}) => {
  const classes = LinkVariants({});

  return <a className={twMerge(classes, className)} {...props} />;
};
