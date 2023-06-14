// "use client";

import { PROJECT_SLUGS, getProjectFromSlug } from "@/utils/files";
import { MDXRemote } from "next-mdx-remote";

type Params = {
  slug: string;
};

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const { frontMatter, source } = await getProjectFromSlug(slug);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* <Section>
        <Container>
          <Heading level={"h1"}>{name}</Heading>
          <Typography className="mt-4" level={"subheading"} palette="weaker">
            {description}
          </Typography>
        </Container>
      </Section>
      {body} */}
      <pre>
        <code>{JSON.stringify(frontMatter, null, 2)}</code>
      </pre>
      {/* <MDXRemote {...source} /> */}
    </main>
  );
}

export function generateStaticParams() {
  return PROJECT_SLUGS;
}
