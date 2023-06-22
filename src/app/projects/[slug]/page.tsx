// "use client";

import { PROJECT_SLUGS, getProjectFromSlug } from "@/utils/files";
import { MDXRemote } from "next-mdx-remote";
import { ProjectMdxContent } from "./ProjectMdxContent";
import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Typography } from "@ui/Typography";

type Params = {
  slug: string;
};

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const { frontMatter, source } = await getProjectFromSlug(slug);

  const { title, summary } = frontMatter;

  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <Container>
          <Heading level={"h1"}>{title}</Heading>
          <Typography className="mt-4" level={"subheading"} palette="weaker">
            {summary}
          </Typography>
        </Container>
      </Section>
      <Section>
        <Container>
          <pre>
            <code>{JSON.stringify(frontMatter, null, 2)}</code>
          </pre>
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
  return PROJECT_SLUGS;
}
