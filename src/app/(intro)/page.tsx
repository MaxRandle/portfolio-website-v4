"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { AnimatedBrandLogo } from "@/components/brand/AnimatedBrandLogo";
import { ButtonLink } from "@ui/Button";
import { motion } from "framer-motion";
import { ROUTE_MAP } from "@/config";
import { fadeAndRiseIn } from "@/utils/animations";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden pb-20">
      <Section>
        <Container className="flex flex-col items-center">
          <AnimatedBrandLogo />
          <motion.div
            className="mt-20"
            variants={fadeAndRiseIn}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 3,
              duration: 1,
              ease: "easeOut",
            }}
          >
            <ButtonLink
              className="shadow-lg drop-shadow-glow-md"
              size="lg"
              intent="primary"
              href={ROUTE_MAP.about.root}
            >
              Enter
            </ButtonLink>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
