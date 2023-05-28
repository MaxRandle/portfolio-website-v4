import { redirect } from "next/navigation";
import { PROJECTS } from "../projects";
import { ROUTES } from "@/config/routes";
import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";

export default async function Page({ params }: { params: { slug: string } }) {
  const { name, description, body } = await getProjectFromSlug(params.slug);

  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <Container>
          <Typography level={"heading1"}>{name}</Typography>
          <Typography className="mt-4" level={"subheading"} color="weaker">
            {description}
          </Typography>
        </Container>
      </Section>
      {body}
    </main>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map(({ slug }) => slug);
}

async function getProjectFromSlug(slug: string) {
  const project = PROJECTS.find((project) => project.slug === slug);
  if (!project) {
    redirect(ROUTES.about.root);
  }
  return project;
}
