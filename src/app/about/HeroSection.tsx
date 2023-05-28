"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";

import { PUBLIC } from "@/config/routes";
import { Figure } from "@ui/Figure";

import { motion } from "framer-motion";

import { fadeAndSlideInFromRight } from "@/utils/animations";

export function HeroSection() {
  const CONTENT = {
    hero: {
      heading: "Max Randle",
      body: "Software Engineer",
      media: PUBLIC.media.maxProfilePicture,
    },
  };

  const MotionContainer = motion(Container);
  const MotionTypography = motion(Typography);
  const MotionFigure = motion(Figure);

  return (
    <Section spacing={"lg"}>
      <MotionContainer
        className="mx-auto flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6 sm:text-left"
        variants={{
          visible: {
            transition: {
              delayChildren: 0,
              staggerChildren: 0.15,
              duration: 0.6,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <MotionFigure
          variants={fadeAndSlideInFromRight}
          className="aspect-square h-48 w-48 rounded-full sm:mx-0"
          src={CONTENT.hero.media}
          alt="me"
          width={160}
          height={160}
          priority
        />
        <div>
          <MotionTypography variants={fadeAndSlideInFromRight} level="heading1">
            {CONTENT.hero.heading}
          </MotionTypography>
          <MotionTypography
            variants={fadeAndSlideInFromRight}
            level="heading3"
            color="weaker"
          >
            {CONTENT.hero.body}
          </MotionTypography>
        </div>
      </MotionContainer>
    </Section>
  );
}
