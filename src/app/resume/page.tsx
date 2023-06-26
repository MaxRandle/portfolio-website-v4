"use client";

import { twMerge } from "tailwind-merge";
import { Section } from "@ui/Section";
import { Container } from "@ui/Container";

import MDXResume from "@/content/mdx/resume.mdx";

export default async function Page() {
  const pageRootClasses = ["min-h-screen overflow-hidden"];
  const resumeStyleClasses = ["font-resume"];

  return (
    <main className={twMerge(pageRootClasses, resumeStyleClasses)}>
      <Section>
        <Container>
          <MDXResume />
        </Container>
      </Section>
    </main>
  );
}
