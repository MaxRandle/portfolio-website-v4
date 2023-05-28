"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";
import { CardContent, CardLink } from "@ui/Card";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";
import { Badge } from "@ui/Badge";
import { Avatar } from "@ui/Avatar";
import { FiChevronRight } from "react-icons/fi";
import { PROJECTS } from "../projects/projects";
import { ROUTES } from "@/config/routes";

export function ProjectsSection() {
  const CONTENT = {
    heading: "My Projects",
    projects: PROJECTS,
  };

  const MotionCardLink = motion(CardLink);
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0% 0% -60% 0%",
  });

  return (
    <Section ref={ref} spacing={"lg"}>
      <Container>
        <Typography level={"heading2"}>{CONTENT.heading}</Typography>
        <ul className="mt-20 space-y-4">
          {CONTENT.projects.map(({ name, description, tags, image, slug }) => (
            <li key={name}>
              <CardLink
                href={ROUTES.projects.slug(slug)}
                className="flex items-center justify-between"
              >
                <CardContent>
                  <div className="flex gap-4">
                    <Avatar src={image} alt={name} />
                    <div>
                      <Typography level={"heading3"}>{name}</Typography>
                      <Typography level={"body"} color="weaker">
                        {description}
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
          ))}
        </ul>
      </Container>
    </Section>
  );
}
