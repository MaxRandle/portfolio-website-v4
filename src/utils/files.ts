import { SRC_ASSET_MAP } from "@/config";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

const getProjectFileNames = () => {
  const absoluteProjectFolderPath = path.join(
    process.cwd(),
    SRC_ASSET_MAP.mdx.projects.folder
  );

  // projectFileNames is the list of all mdx files inside the absoluteProjectFolderPath directory
  const projectFileNames = fs
    .readdirSync(absoluteProjectFolderPath)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

  return projectFileNames;
};

/**
 * Gets the slugs of all projects
 * @returns The slugs of all projects
 */
export const getProjectSlugs = () => {
  const projectFileNames = getProjectFileNames();

  const projectSlugs = projectFileNames.map((filePath) =>
    filePath.replace(/\.mdx?$/, "")
  );

  return projectSlugs;
};

export type ProjectFrontMatter = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  repo?: string;
  thumbnail?: string;
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
  const filePath = getProjectFileNames().find((path) => path.includes(slug));

  if (!filePath) {
    throw new Error(`No MD or MDX file found for slug ${slug}`);
  }

  const projectFilePath = path.join(
    SRC_ASSET_MAP.mdx.projects.folder,
    filePath
  );

  const { mdxSource, data } = await readAndSerializeMdxFile(projectFilePath);

  return {
    source: mdxSource,
    frontMatter: {
      slug,
      ...data,
    } as ProjectFrontMatter,
  };
};

/**
 * Reads and serializes an MDX file
 * @param filePath - The *ABSOLUTE* path to the MDX file
 * @returns The serialized MDX source and the front matter
 */
export const readAndSerializeMdxFile = async (filePath: string) => {
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
    scope: data,
  });

  return { mdxSource, data };
};
