import { Heading, HeadingProps } from "@ui/Heading";
import { Typography, TypographyProps } from "@ui/Typography";
import { MDXComponents } from "mdx/types";

export const MdxComponentMap: MDXComponents = {
  h1: (props: HeadingProps) => (
    <Heading className="mt-4" {...props} level={"h1"} />
  ),
  h2: (props: HeadingProps) => (
    <Heading className="mt-4" {...props} level={"h2"} />
  ),
  h3: (props: HeadingProps) => (
    <Heading className="mt-4" {...props} level={"h3"} />
  ),

  p: (props: TypographyProps) => (
    <Typography className="mt-4" {...props} level={"body"} />
  ),
};
