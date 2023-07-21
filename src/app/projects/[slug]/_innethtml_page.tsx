import { ProjectMdxContent } from "./ProjectMdxContent";
import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Typography } from "@ui/Typography";
import { Link } from "@ui/Link";
import { ROUTE_MAP, SRC_ASSET_MAP } from "@/config";
import { GithubRepositoryChip } from "@/components/misc/GithubRepositoryChip";

import MDXResume from "@/content/mdx/projects/alpha-tac.mdx";
import { MDXProps } from "mdx/types";
import { getAllProjectSlugs, getProjectBySlug } from "@/utils/mdx";

type Params = {
  slug: string;
};

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const { content, frontMatter } = await getProjectBySlug(slug);

  const { title, summary, repo } = frontMatter;

  //   const {} = serializeMdxContent(MdxProjectContent.)

  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <Container>
          <Link href={`${ROUTE_MAP.about.root}#projects`}>
            {`Back to `}
            <code className="rounded-md bg-base-300 p-1 dark:bg-base-1300">
              {ROUTE_MAP.about.root}
            </code>
          </Link>
          <Heading className="mt-12" level={"h1"}>
            {title}
          </Heading>
          <Typography className="mt-4" level={"subheading"} palette="weaker">
            {summary}
          </Typography>
          {repo ? <GithubRepositoryChip className="mt-12" repo={repo} /> : null}
        </Container>
      </Section>

      <Section>
        <Container dangerouslySetInnerHTML={{ __html: content }} />
      </Section>
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}
