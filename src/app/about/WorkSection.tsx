"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";

import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import { useCycleArray } from "@/hooks/useCycleArray";

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
      ],
      body2: "web applications using modern tech.",
    },
  };

  const MotionTypography = motion(Typography);

  const { currentItem } = useCycleArray(CONTENT.work.adjectives, 2 * 1000);

  return (
    <Section spacing={"lg"}>
      <Container>
        <Typography level="heading2">{CONTENT.work.heading}</Typography>
        <div className="mt-16 inline-flex flex-col sm:flex-row">
          <Typography color="weaker" level={"heading1"}>
            {CONTENT.work.body1}
          </Typography>
          <div className="relative mt-4 pb-12 sm:mt-0 sm:pb-0">
            <AnimatePresence>
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
              >
                <span>{` ${currentItem}`}</span>
              </MotionTypography>
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

/*
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
*/
