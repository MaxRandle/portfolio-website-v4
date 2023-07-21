"use client";

import { MDXRemote } from "next-mdx-remote";
import React from "react";
import "highlight.js/styles/atom-one-dark.css";
import { Embed } from "@/components/misc/Embed";

export const ProjectMdxContent: React.FC<
  React.ComponentProps<typeof MDXRemote>
> = ({ ...props }) => {
  // TODO find out why MDXRemote doesn't like my Embed component :(
  return <MDXRemote components={{ Embed: Embed as never }} {...props} />;
};
