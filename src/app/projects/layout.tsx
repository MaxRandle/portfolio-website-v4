"use client";

import { MDXComponentsMap } from "@/mdx-components";
import { MDXProvider } from "@mdx-js/react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXProvider components={MDXComponentsMap}>{children}</MDXProvider>;
}
