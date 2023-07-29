import { Container } from "@ui/Container";
import { AppNavHeader } from "@/components/composite/AppNavHeader";

import { ROUTE_MAP } from "@/config";

import { FiExternalLink } from "react-icons/fi";

import { ButtonLink } from "@ui/Button";
import { Divider } from "@ui/Divider/Divider";
import { HeroSection } from "./HeroSection";
import { WorkSection } from "./WorkSection";
import { StackSection } from "./StackSection";
import { ToolsSection } from "./ToolsSection";
import { ProjectsSection } from "./ProjectsSection";
import { getProjectSlugs, getProjectFromSlug } from "@/utils/files";

export default async function Page() {
  const projectsFrontMatter = (
    await Promise.all(getProjectSlugs().map(getProjectFromSlug))
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
          href={ROUTE_MAP.resume.root}
        >
          {`résumé`}
          <FiExternalLink />
        </ButtonLink>
        <Divider className="grow" />
      </Container>

      <WorkSection />

      <StackSection />

      <ToolsSection />

      <ProjectsSection projectsFrontMatter={projectsFrontMatter} />
    </main>
  );
}
