import { Heading, HeadingProps } from "@ui/Heading";
import { AnchorLink } from "@ui/Link";
import { Typography, TypographyProps } from "@ui/Typography";
import { MDXComponents } from "mdx/types";

// This file is required to use MDX in `app` directory.
// see: https://github.com/vercel/next.js/tree/canary/examples/app-dir-mdx

export const MDXComponentsMap: MDXComponents = {
  h1: (props: HeadingProps) => (
    <Heading
      className="mt-24 text-center print:mt-0 print:text-2xl"
      level={"h1"}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <Heading
      className="mt-12 print:mt-6 print:text-lg"
      level={"h2"}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <Heading
      className="mt-4 print:mt-2 print:text-sm"
      level={"h3"}
      {...props}
    />
  ),
  p: (props: TypographyProps) => (
    <Typography
      className="mt-4 print:mt-2 print:text-xs"
      palette={"weaker"}
      level={"body"}
      {...props}
    />
  ),
  a: (props) => (
    <AnchorLink
      className="mt-4 print:mt-2 print:text-xs print:font-normal print:text-base-1100 print:dark:text-base-600"
      target="_blank"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-4  list-decimal space-y-2 print:mt-2 print:text-xs"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-4 list-disc space-y-2 print:mt-2 print:space-y-1 print:text-xs"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="ml-12 space-x-2 text-base-1100 marker:text-base-1100 dark:text-base-600 marker:dark:text-base-600 print:ml-6"
      {...props}
    />
  ),
  pre: (props) => <pre className="mt-4 print:mt-2 print:text-xs" {...props} />,
  hr: (props) => <hr className="mt-4 print:mt-2" {...props} />,
  table: (props) => (
    <table
      className="mt-4 w-full text-base-1100 dark:text-base-600 print:mt-2 print:text-xs"
      {...props}
    />
  ),
  thead: (props) => <thead className="text-lg" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className="" {...props} />,
  th: (props) => <th className="pl-4 first:pl-0 print:text-xs" {...props} />,
  td: (props) => <td className="pl-4 first:pl-0" {...props} />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDXComponentsMap,
    ...components,
  };
}
