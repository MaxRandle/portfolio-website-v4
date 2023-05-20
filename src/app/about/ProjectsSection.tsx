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
import { PUBLIC, ROUTES } from "@/config/routes";

export function ProjectsSection() {
  const CONTENT = {
    heading: "My Projects",
    projects: [
      {
        name: "Alpha Tac",
        image: PUBLIC.media.projects.alphaTac,
        description:
          "I devised and built an agent that can play the game of Ultimate Tic Tac Toe.",
        tags: ["Algorithms", "Optimisation", "Strategy"],
        url: ROUTES.projects.alphaTac.root,
      },
      {
        name: "Randle Recipes",
        image: PUBLIC.media.projects.randleRecipes,
        description: "An online recipe book for the Randle family.",
        tags: ["Authentication", "Dynamic data", "Full stack"],
        url: ROUTES.projects.randleRecipes.root,
      },
      {
        name: "I.S.S Docking Autopilot",
        image: PUBLIC.media.projects.dragonCapsule,
        description:
          "An autopilot script for the SpaceX International Space Station docking simulator.",
        tags: ["Reverse-engineering", "Algorithms", "Physics"],
        url: ROUTES.projects.iss.root,
      },
      {
        name: "P5.js",
        image: PUBLIC.media.projects.p5jsLogo,
        description:
          "A collection of small projects in Processing for JavaScript.",
        tags: ["Algorithms", "Graphics"],
        url: ROUTES.projects.p5js.root,
      },
    ],
  };

  const MotionCardLink = motion(CardLink);
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0% 0% -60% 0%",
  });

  return (
    <Section ref={ref}>
      <Container className="">
        <Typography level={"heading2"}>{CONTENT.heading}</Typography>
        <div className="mt-20 space-y-4">
          {CONTENT.projects.map(({ name, description, tags, image, url }) => (
            <CardLink
              key={name}
              href={url}
              className="flex items-center justify-between"
            >
              <CardContent>
                <div className="flex gap-4">
                  <Avatar className="" src={image}>
                    CF
                  </Avatar>
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
          ))}
        </div>
      </Container>
    </Section>
  );
}
