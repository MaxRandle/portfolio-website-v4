"use client";

import { ROUTE_MAP } from "@/config";
import { Container } from "@ui/Container";
import { Link } from "@ui/Link";
import { Section } from "@ui/Section";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <Container>
          <Link href={ROUTE_MAP.about.root}>
            {`Back to `}
            <code className="rounded-md bg-base-300 p-1 dark:bg-base-1300">
              {ROUTE_MAP.about.root}
            </code>
          </Link>
          {children}
        </Container>
      </Section>
    </main>
  );
}
