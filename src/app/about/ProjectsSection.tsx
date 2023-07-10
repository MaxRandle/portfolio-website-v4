"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";
import { CardContent, CardLink } from "@ui/Card";

import { Badge } from "@ui/Badge";
import { Avatar } from "@ui/Avatar";
import { FiChevronRight } from "react-icons/fi";
import { PUBLIC_ASSET_MAP, ROUTE_MAP } from "@/config";
import { ProjectFrontMatter } from "@/utils/files";
import { Heading } from "@ui/Heading";

export function ProjectsSection({
  projectsFrontMatter,
}: {
  projectsFrontMatter: ProjectFrontMatter[];
}) {
  const CONTENT = {
    heading: "My Projects",
  };

  return (
    <Section id="projects" spacing={"lg"}>
      <Container>
        <Heading level={"h2"}>{CONTENT.heading}</Heading>
        <ul className="mt-20 space-y-4">
          {projectsFrontMatter.map(
            ({ slug, summary, tags, thumbnail, title }) => (
              <li key={slug}>
                <CardLink
                  href={ROUTE_MAP.projects.slug(slug)}
                  className="flex items-center justify-between"
                >
                  <CardContent>
                    <div className="flex gap-4">
                      {!!thumbnail ? (
                        <Avatar
                          src={PUBLIC_ASSET_MAP.media.projects.thumbnails.fileName(
                            thumbnail
                          )}
                          alt={title}
                        />
                      ) : null}
                      <div>
                        <Heading level={"h2"}>{title}</Heading>
                        <Typography level={"body"} palette="weaker">
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
