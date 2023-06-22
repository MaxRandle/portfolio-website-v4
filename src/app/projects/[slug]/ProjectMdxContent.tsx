"use client";

import { MDXRemote } from "next-mdx-remote";
import React from "react";
import "highlight.js/styles/atom-one-dark.css";

export const ProjectMdxContent: React.FC<
  React.ComponentProps<typeof MDXRemote>
> = ({ ...props }) => {
  return <MDXRemote components={{}} {...props} />;
};
