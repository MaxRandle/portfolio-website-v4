import { Container } from "@ui/Container";
import { AppNavHeader } from "@/components/composite/AppNavHeader";

import { PUBLIC } from "@/config/routes";

import { FiExternalLink } from "react-icons/fi";

import { ButtonLink } from "@ui/Button";
import { Divider } from "@ui/Divider/Divider";
import { HeroSection } from "./HeroSection";
import { WorkSection } from "./WorkSection";
import { StackSection } from "./StackSection";
import { ToolsSection } from "./ToolsSection";
import { ProjectsSection } from "./ProjectsSection";
import { PROJECT_SLUGS, getProjectFromSlug } from "@/utils/files";

export default async function Page() {
  const projectsFrontMatter = (
    await Promise.all(PROJECT_SLUGS.map(getProjectFromSlug))
  ).map((project) => project.frontMatter);

  return (
    <main className="min-h-screen overflow-hidden">
      <AppNavHeader />

      <HeroSection />

      <Container className="flex w-full items-center">
        <Divider className="grow" />
        <ButtonLink
          className="inline-flex items-center gap-2"
          intent={"secondary"}
          href={PUBLIC.documents.resume}
          target="_blank"
        >
          {`résumé`}
          <FiExternalLink />
        </ButtonLink>
        <Divider className="grow" />
      </Container>

      <WorkSection />

      <StackSection />

      <ToolsSection />

      {/* TODO remove ones this gets fixed: https://github.com/vercel/next.js/issues/42292 */}
      {/* @ts-expect-error Async Server Component */}
      <ProjectsSection projectsFrontMatter={projectsFrontMatter} />
    </main>
  );
}
