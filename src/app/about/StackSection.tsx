"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";
import { Card, CardContent } from "@ui/Card";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function StackSection() {
  const CONTENT = {
    stack: {
      heading: "My Front-End stack",
      tech: [
        {
          icon: SiTypescript,
          name: "TypeScript",
          description:
            "TypeScript is essential and JavaScript is not a viable language for building production applications.",
        },
        {
          icon: SiReact,
          name: "React 18",
          description:
            "This legendary framework continues to make new strides as it rises into its third great era with the introduction of server components.",
        },
        {
          icon: SiNextdotjs,
          name: "Next 13",
          description:
            "What better way to build an application than with the tools and capabilities afforded by Next.js?",
        },
        {
          icon: SiTailwindcss,
          name: "TailwindCSS",
          description:
            "The best thing to happen to CSS since flexbox. Much more than syntax, Tailwind is a design system all on its own.",
        },
      ],
    },
  };

  return (
    <Section palette={"surface"}>
      <Container>
        <Typography level={"heading2"}>{CONTENT.stack.heading}</Typography>
        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          {CONTENT.stack.tech.map(({ description, icon: Icon, name }) => (
            <Card palette={"base"} key={name}>
              <CardContent>
                <Icon size={40} />
                <Typography level={"subheading"} className="mt-4">
                  {name}
                </Typography>
                <Typography color={"weaker"} level={"caption"} className="mt-4">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
