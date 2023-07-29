import { SRC_ASSET_MAP } from "@/config";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

function printDirectoryStructure(base: string, level: string = ""): void {
  // Synchronously read the contents of the base directory
  const entries = fs.readdirSync(base);

  for (const entry of entries) {
    const entryPath = path.join(base, entry);
    const stats = fs.statSync(entryPath);

    // If the current entry is a directory, recursively print its structure
    if (stats.isDirectory()) {
      console.error(`${level}+ ${entry}`);
      printDirectoryStructure(entryPath, level + "  ");
    } else {
      console.error(`${level}|- ${entry}`);
    }
  }
}

const getProjectFileNames = () => {
  console.log("==============================================================");
  printDirectoryStructure(process.cwd());

  console.log("process.cwd()", process.cwd());

  const absoluteProjectFolderPath = path.join(
    process.cwd(),
    SRC_ASSET_MAP.mdx.projects.folder
  );

  // PROJECT_FILE_PATHS is the list of all mdx files inside the PROJECTS_FOLDER_PATH directory
  const projectFileNames = fs
    .readdirSync(absoluteProjectFolderPath)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

  console.log("projectFileNames");
  console.log(projectFileNames);

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
  console.log("filePath", filePath);

  if (!filePath) {
    throw new Error(`No MD or MDX file found for slug ${slug}`);
  }

  const projectFilePath = path.join(
    SRC_ASSET_MAP.mdx.projects.folder,
    filePath
  );
  console.log("projectFilePath", projectFilePath);

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
