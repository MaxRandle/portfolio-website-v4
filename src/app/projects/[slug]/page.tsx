import { getProjectSlugs, getProjectFromSlug } from "@/utils/files";
import { ProjectMdxContent } from "./ProjectMdxContent";
import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Typography } from "@ui/Typography";
import { Link } from "@ui/Link";
import { ROUTE_MAP } from "@/config";
import { GithubRepositoryChip } from "@/components/misc/GithubRepositoryChip";

/**
 * true (default): Dynamic segments not included in generateStaticParams are generated on demand.
 * false: Dynamic segments not included in generateStaticParams will return a 404.
 */
export const dynamicParams = false; // true | false,

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return getProjectSlugs().map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  console.log(params);
  const { slug } = params;

  const { frontMatter, source } = await getProjectFromSlug(slug);
  const { title, summary, repo } = frontMatter;

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
        <Container>
          <ProjectMdxContent {...source} />
        </Container>
      </Section>
    </main>
  );
}
