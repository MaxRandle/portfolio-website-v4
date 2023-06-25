import { SRC_ASSET_MAP } from "@/config";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

export const ABSOLUTE_PROJECTS_PATH = path.join(
  process.cwd(),
  SRC_ASSET_MAP.mdx.projects.folder
);

// PROJECT_FILE_PATHS is the list of all mdx files inside the PROJECTS_FOLDER_PATH directory
export const PROJECT_FILE_PATHS = fs
  .readdirSync(ABSOLUTE_PROJECTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const PROJECT_SLUGS = PROJECT_FILE_PATHS.map((filePath) =>
  filePath.replace(/\.mdx?$/, "")
);

export type ProjectFrontMatter = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  repo?: string;
  thumbnail?: string;
  embedSrc?: string;
};

export type Project = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  frontMatter: ProjectFrontMatter;
};

/**
 *
 * @param slug - The slug of the project to get
 * @returns The project with the given slug
 */
export const getProjectFromSlug = async (slug: string): Promise<Project> => {
  const filePath = PROJECT_FILE_PATHS.find((path) => path.includes(slug));

  if (!filePath) {
    throw new Error(`No MD or MDX file found for slug ${slug}`);
  }

  const projectFilePath = path.join(
    SRC_ASSET_MAP.mdx.projects.folder,
    filePath
  );
  const source = fs.readFileSync(projectFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: {
      slug,
      ...data,
    } as ProjectFrontMatter,
  };
};
