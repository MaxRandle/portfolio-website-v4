"use client";

import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Typography } from "@ui/Typography";
import { CardContent, CardLink } from "@ui/Card";

import { motion, useInView } from "framer-motion";

import { fadeAndSlideInFromLeft } from "@/utils/animations";
import { RadixUiLogo } from "@/components/svgs/RadixUiLogo";
import { ReactHookFormLogo } from "@/components/svgs/ReactHookFormLogo";
import { ZodLogo } from "@/components/svgs/ZodLogo";
import { TanStackLogo } from "@/components/svgs/TanStackLogo";
import { CvaLogo } from "@/components/svgs/CvaLogo";
import { FramerLogo } from "@/components/svgs/FramerLogo";
import { AuthJsLogo } from "@/components/svgs/AuthJsLogo";
import { SiPrisma } from "react-icons/si";
import { T3Logo } from "@/components/svgs/T3Logo";
import { TrpcLogo } from "@/components/svgs/TrpcLogo";
import { useRef } from "react";
import { TurboRepoLogo } from "@/components/svgs/TurboRepoLogo";
import { Heading } from "@ui/Heading";
import { MdxLogo } from "@/components/svgs/MdxLogo";

export function ToolsSection() {
  const CONTENT = {
    toolkit: {
      heading: "Favourite tools and libraries",
      tools: [
        {
          name: "TanStack Query",
          icon: TanStackLogo,
          url: "https://tanstack.com/query/latest",
        },
        {
          name: "Auth.js",
          icon: AuthJsLogo,
          url: "https://authjs.dev/",
        },
        {
          name: "React Hook Form",
          icon: ReactHookFormLogo,
          url: "https://react-hook-form.com/",
        },
        {
          name: "tRPC",
          icon: TrpcLogo,
          url: "https://trpc.io/",
        },
        {
          name: "Framer Motion",
          icon: FramerLogo,
          url: "https://www.framer.com/motion/",
        },
        {
          name: "Radix UI",
          icon: RadixUiLogo,
          url: "https://www.radix-ui.com/",
        },
        {
          name: "Prisma",
          icon: SiPrisma,
          url: "https://www.prisma.io/",
        },
        {
          name: "Create T3 App",
          icon: T3Logo,
          url: "https://create.t3.gg/",
        },
        {
          name: "Class Variance Authority",
          icon: CvaLogo,
          url: "https://cva.style/docs",
        },
        {
          name: "Zod",
          icon: ZodLogo,
          url: "https://zod.dev/",
        },
        {
          name: "TurboRepo",
          icon: TurboRepoLogo,
          url: "https://turbo.build/repo",
        },
        {
          name: "MDX",
          icon: MdxLogo,
          url: "https://mdxjs.com/",
        },
      ],
    },
  };

  const MotionCardLink = motion(CardLink);
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0% 0% -60% 0%",
  });

  return (
    <Section ref={ref} spacing={"lg"}>
      <Container className="mx-auto max-w-3xl text-center lg:px-6">
        <Heading className="" level={"h2"}>
          {CONTENT.toolkit.heading}
        </Heading>
        <motion.div
          className="mt-20 flex flex-wrap justify-evenly gap-4 sm:justify-center"
          variants={{
            hidden: {
              transition: {
                delayChildren: 0.5,
                staggerChildren: -0.05,
              },
            },
            visible: {
              transition: {
                delayChildren: 0,
                staggerChildren: 0.1,
              },
            },
          }}
          initial={inView ? "hidden" : "visible"}
          animate={inView ? "visible" : "hidden"}
        >
          {CONTENT.toolkit.tools.map(({ name, icon: Icon, url }) => (
            <MotionCardLink
              className="shadow-lg"
              key={name}
              href={url}
              target="_blank"
              variants={fadeAndSlideInFromLeft}
            >
              <CardContent className="flex gap-4">
                <Icon className="shrink-0" size={32} />
                <Heading level={"h3"}>{name}</Heading>
              </CardContent>
            </MotionCardLink>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
