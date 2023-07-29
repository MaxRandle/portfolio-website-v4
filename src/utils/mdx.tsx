import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { SRC_ASSET_MAP } from "@/config";
import rehypeStringify from "rehype-stringify";

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

// memoize/cache the creation of the markdown parser, this sped up the
// building of the blog from ~60s->~10s
let getParserReturn: ReturnType<typeof getParserPre> | undefined;

async function getParserPre() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeSlug)
    .use(rehypeStringify);
}

function getParser() {
  if (!getParserReturn) {
    getParserReturn = getParserPre().catch((e) => {
      getParserReturn = undefined;
      throw e;
    });
  }
  return getParserReturn;
}

/**
 * Reads and parses an MDX file
 * @param filePath - The path to the MDX file
 * @returns frontMatter - The front matter of the MDX file
 * @returns content - The serialized MDX source as an html string
 */
export const readAndParseMdxFile = async (filePath: string) => {
  const source = await fs.promises.readFile(filePath, "utf8");

  const { content, data } = matter(source);
  const parser = await getParser();
  const html = await parser.process(content);

  return {
    frontMatter: data,
    content: html.value.toString(),
  };
};

export async function getProjectBySlug(slug: string) {
  const fullPath = join(SRC_ASSET_MAP.mdx.projects.folder, `${slug}.mdx`);
  const { frontMatter, content } = await readAndParseMdxFile(fullPath);

  return {
    frontMatter: frontMatter as ProjectFrontMatter,
    content,
  };
}

export async function getAllProjectSlugs() {
  return fs
    .readdirSync(SRC_ASSET_MAP.mdx.projects.folder)
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export async function getAllProjects() {
  const slugs = await getAllProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const project = await getProjectBySlug(slug);
      return project;
    })
  );

  return projects;
}
