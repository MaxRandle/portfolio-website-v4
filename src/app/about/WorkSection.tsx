"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";

import { PUBLIC } from "@/config/routes";
import { Figure } from "@ui/Figure";

import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";

export function WorkSection() {
  const CONTENT = {
    work: {
      heading: "My work",
      body1: "I build",
      adjectives: [
        "fast",
        "responsive",
        "accessible",
        "functional",
        "seamless",
        "beautiful",
        "gay",
      ],
      body2: "web applications using modern tech.",

      media: PUBLIC.media.maxArtExhibit,
    },
  };

  const MotionTypography = motion(Typography);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      let next = currentIndex + 1;
      if (next === CONTENT.work.adjectives.length) {
        next = 0;
      }
      setCurrentIndex(next);
    }, 2 * 1000);
  }, [currentIndex, CONTENT.work.adjectives]);

  return (
    <Section>
      <Container
      // className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:gap-6"
      >
        <Typography level="heading2">{CONTENT.work.heading}</Typography>

        {/* <Figure
          className="row-span-2 aspect-square h-full max-h-[16rem] min-w-[12rem] shrink-0 rounded-full"
          src={CONTENT.work.media}
          alt="me viewing art"
          width={160}
          height={160}
        /> */}

        <div className="mx-auto mt-16 flex flex-col sm:flex-row">
          <Typography color="weaker" level={"heading1"}>
            {CONTENT.work.body1}
          </Typography>
          <div className="relative mt-4 pb-12 sm:mt-0 sm:pb-0">
            <AnimatePresence>
              {
                CONTENT.work.adjectives.map((adjective) => (
                  <MotionTypography
                    variants={{
                      enter: {
                        y: -45,
                        opacity: 0,
                      },
                      onStage: {
                        y: 0,
                        opacity: 1,
                      },
                      exit: {
                        y: 45,
                        opacity: 0,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      opacity: {
                        ease: "easeIn",
                      },
                    }}
                    initial="enter"
                    animate="onStage"
                    exit="exit"
                    className="absolute sm:left-[0.4ch]"
                    color="primary"
                    level={"heading1"}
                    key={adjective}
                  >
                    <span>{` ${adjective}`}</span>
                  </MotionTypography>
                ))[currentIndex]
              }
            </AnimatePresence>
          </div>
        </div>
        <Typography className="mt-16" color="weaker" level={"heading3"}>
          {CONTENT.work.body2}
        </Typography>
      </Container>
    </Section>
  );
}
