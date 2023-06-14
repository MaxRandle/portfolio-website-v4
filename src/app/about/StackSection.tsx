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
import { BrandLogoIcon } from "@/components/brand/BrandLogoIcon";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heading } from "@ui/Heading";

function Floaters({ y }: { y: MotionValue<string> }) {
  const MotionIcon = motion(BrandLogoIcon);

  return (
    <motion.div
      style={{
        position: "absolute",
        display: "relative",
        left: "50%",
        top: "50%",
        x: "-50%",
        y,
        width: "120rem",
        height: "120rem",
        opacity: "0.1",
        // border: "1px solid black",
      }}
    >
      <MotionIcon className="absolute left-[10rem] top-[15rem] h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rotate-3 transform" />
      <MotionIcon className="absolute left-[24rem] top-[60rem] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 -rotate-3 transform" />
      <MotionIcon className="absolute left-[50rem] top-[12rem] h-[5rem] w-[5rem] -translate-x-1/2 -translate-y-1/2 rotate-12 transform" />
      <MotionIcon className="absolute left-[52rem] top-[100rem] h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rotate-6 transform" />
      <MotionIcon className="absolute left-[65rem] top-[37rem] h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2 rotate-45 transform" />
      <MotionIcon className="absolute left-[90rem] top-[20rem] h-[8rem] w-[8rem] -translate-x-1/2 -translate-y-1/2 -rotate-12 transform" />
      <MotionIcon className="absolute left-[96rem] top-[75rem] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rotate-3 transform" />
      <MotionIcon className="absolute left-[98rem] top-[110rem] h-[8rem] w-[8rem] -translate-x-1/2 -translate-y-1/2 -rotate-6 transform" />
    </motion.div>
  );
}

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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-100%", "100%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "-70%"]);

  return (
    <Section
      ref={ref}
      className="relative overflow-hidden"
      palette={"surface"}
      spacing={"lg"}
    >
      <Container>
        <Floaters y={y} />
        <Heading level={"h2"}>{CONTENT.stack.heading}</Heading>
        <div className="relative mt-20 grid gap-4 sm:grid-cols-2">
          {CONTENT.stack.tech.map(({ description, icon: Icon, name }) => (
            <Card palette={"base"} key={name}>
              <CardContent>
                <Icon size={40} />
                <Typography level={"subheading"} className="mt-4">
                  {name}
                </Typography>
                <Typography
                  palette={"weaker"}
                  level={"caption"}
                  className="mt-4"
                >
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
