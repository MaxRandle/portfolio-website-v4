"use client";

import { MDXProvider } from "@mdx-js/react";
import { MdxComponentMap } from "@/utils/mdx";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXProvider components={MdxComponentMap}>{children}</MDXProvider>;
}
