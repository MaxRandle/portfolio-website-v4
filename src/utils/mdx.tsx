import { Heading, HeadingProps } from "@ui/Heading";
import { AnchorLink } from "@ui/Link";
import { Typography, TypographyProps } from "@ui/Typography";
import { VariantProps, cva } from "class-variance-authority";
import { MDXComponents } from "mdx/types";
import { twMerge } from "tailwind-merge";

export const MdxComponentMap: MDXComponents = {
  h1: (props: HeadingProps) => (
    <Heading className="mt-24" level={"h1"} {...props} />
  ),
  h2: (props: HeadingProps) => (
    <Heading className="mt-12" level={"h2"} {...props} />
  ),
  h3: (props: HeadingProps) => (
    <Heading className="mt-4" level={"h3"} {...props} />
  ),
  p: (props: TypographyProps) => (
    <Typography className="mt-4" palette={"weaker"} level={"body"} {...props} />
  ),
  a: (props) => <AnchorLink className="mt-4" target="_blank" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2" {...props} />,
  li: (props) => (
    <li
      className="ml-12 space-x-2 text-base-1000 marker:text-base-1000 dark:text-base-700 marker:dark:text-base-700"
      {...props}
    />
  ),
  pre: (props) => <pre className="mt-4" {...props} />,
  hr: (props) => <hr className="mt-4" {...props} />,
  table: (props) => <table {...props} />,
  thead: (props) => <thead {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr {...props} />,
  td: (props) => <td {...props} />,
};

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
