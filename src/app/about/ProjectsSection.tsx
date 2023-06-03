"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";
import { CardContent, CardLink } from "@ui/Card";

import { Badge } from "@ui/Badge";
import { Avatar } from "@ui/Avatar";
import { FiChevronRight } from "react-icons/fi";
import { PUBLIC, ROUTES } from "@/config/routes";
import {
  PROJECT_SLUGS,
  ProjectFrontMatter,
  getProjectFromSlug,
} from "@/utils/files";

export async function ProjectsSection({
  projectsFrontMatter,
}: {
  projectsFrontMatter: ProjectFrontMatter[];
}) {
  const CONTENT = {
    heading: "My Projects",
  };

  return (
    <Section spacing={"lg"}>
      <Container>
        <Typography level={"heading2"}>{CONTENT.heading}</Typography>
        <ul className="mt-20 space-y-4">
          {projectsFrontMatter.map(
            ({ slug, summary, tags, thumbnail, title }) => (
              <li key={slug}>
                <CardLink
                  href={ROUTES.projects.slug(slug)}
                  className="flex items-center justify-between"
                >
                  <CardContent>
                    <div className="flex gap-4">
                      {/* {!!thumbnail ? (
                        <Avatar
                          src={PUBLIC.media.projects[thumbnail]}
                          alt={title}
                        />
                      ) : null} */}
                      <div>
                        <Typography level={"heading3"}>{title}</Typography>
                        <Typography level={"body"} color="weaker">
                          {summary}
                        </Typography>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardContent className="hidden pl-0 sm:block">
                    <FiChevronRight size={32} />
                  </CardContent>
                </CardLink>
              </li>
            )
          )}
        </ul>
      </Container>
    </Section>
  );
}
