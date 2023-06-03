import { PROJECT_SLUGS, getProjectFromSlug } from "@/utils/files";

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
          <Typography level={"heading1"}>{name}</Typography>
          <Typography className="mt-4" level={"subheading"} color="weaker">
            {description}
          </Typography>
        </Container>
      </Section>
      {body} */}
      <pre>
        <code>{JSON.stringify(frontMatter, null, 2)}</code>
      </pre>
    </main>
  );
}

export function generateStaticParams() {
  return PROJECT_SLUGS;
}
