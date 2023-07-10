import { getProjectSlugs, getProjectFromSlug } from "@/utils/files";
import { ProjectMdxContent } from "./ProjectMdxContent";
import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Typography } from "@ui/Typography";
import { Link } from "@ui/Link";
import { ROUTE_MAP } from "@/config";
import { GithubRepositoryChip } from "@/components/misc/GithubRepositoryChip";

type Params = {
  slug: string;
};

export default async function Page({ params }: { params: Params }) {
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

export function generateStaticParams() {
  return getProjectSlugs();
}
