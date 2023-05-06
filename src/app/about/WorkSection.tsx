"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";

import { PUBLIC } from "@/config/routes";
import { Figure } from "@ui/Figure";

import { motion } from "framer-motion";

import { fadeAndRiseIn } from "@/utils/animations";

export function WorkSection() {
  const CONTENT = {
    work: {
      heading: "My work",
      body: "I am a Front-End Software Engineer with a passion for creating fast, responsive, accessible, and beautiful web applications using modern tech. I value readability, consistency, simplicity, and agnosticism as the core paradigms of my coding mantra.",
      action: "Résumé",
      media: PUBLIC.media.maxArtExhibit,
    },
  };

  const MotionContainer = motion(Container);
  const MotionTypography = motion(Typography);
  const MotionFigure = motion(Figure);

  return (
    <Section>
      <MotionContainer
        className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:gap-6"
        initial={"hidden"}
        animate={"visible"}
        variants={{
          visible: {
            transition: {
              duration: 0.6,
            },
          },
        }}
      >
        <MotionTypography level="heading2" variants={fadeAndRiseIn}>
          {CONTENT.work.heading}
        </MotionTypography>
        <MotionFigure
          variants={fadeAndRiseIn}
          className="row-span-2 mx-auto aspect-square h-full max-h-[16rem] min-w-[12rem] shrink-0 rounded-full"
          src={CONTENT.work.media}
          alt="me viewing art"
          width={160}
          height={160}
        />
        <MotionTypography
          className="text-center sm:text-left"
          color="weaker"
          variants={fadeAndRiseIn}
        >
          {CONTENT.work.body}
        </MotionTypography>
      </MotionContainer>
    </Section>
  );
}
