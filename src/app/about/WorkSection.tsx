"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";

import { AnimatePresence, motion } from "framer-motion";

import { useCycleArray } from "@/hooks/useCycleArray";
import { Heading } from "@ui/Heading";

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

  const MotionHeading = motion(Heading);

  const { currentItem, currentIndex } = useCycleArray(
    CONTENT.work.adjectives,
    3 * 1000
  );

  return (
    <Section spacing={"lg"}>
      <Container>
        <Heading level={"h2"}>{CONTENT.work.heading}</Heading>
        <div className="mt-16 inline-flex flex-col sm:flex-row">
          <Heading palette="weaker" level={"h1"}>
            {CONTENT.work.body1}
          </Heading>
          <div className="relative mt-4 pb-12 sm:mt-0 sm:pb-0">
            <AnimatePresence>
              <MotionHeading
                key={currentIndex}
                variants={{
                  enter: {
                    y: -60,
                    opacity: 0,
                  },
                  onStage: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                    },
                  },
                  exit: {
                    y: 60,
                    opacity: 0,
                    transition: {
                      y: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  },
                }}
                initial="enter"
                animate="onStage"
                exit="exit"
                className="absolute sm:left-[0.4ch]"
                palette="primary"
                level={"h1"}
              >
                <span>{` ${currentItem}`}</span>
              </MotionHeading>
            </AnimatePresence>
          </div>
        </div>
        <Heading className="mt-16" palette="weaker" level={"h3"}>
          {CONTENT.work.body2}
        </Heading>
      </Container>
    </Section>
  );
}
