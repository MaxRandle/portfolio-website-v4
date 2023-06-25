"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";

import { PUBLIC_ASSET_MAP } from "@/config";
import { Figure } from "@ui/Figure";

import { motion } from "framer-motion";

import { fadeAndSlideInFromRight } from "@/utils/animations";
import { Heading } from "@ui/Heading";

export function HeroSection() {
  const CONTENT = {
    hero: {
      heading: "Max Randle",
      body: "Software Engineer",
      media: PUBLIC_ASSET_MAP.media.maxProfilePicture,
    },
  };

  const MotionContainer = motion(Container);
  const MotionHeading = motion(Heading);
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
          <MotionHeading variants={fadeAndSlideInFromRight} level="h1">
            {CONTENT.hero.heading}
          </MotionHeading>
          <MotionHeading
            variants={fadeAndSlideInFromRight}
            level="h3"
            palette="weaker"
          >
            {CONTENT.hero.body}
          </MotionHeading>
        </div>
      </MotionContainer>
    </Section>
  );
}
