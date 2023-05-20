import { Container } from "@ui/Container";
import { Section } from "@ui/Section";
import { Typography } from "@ui/Typography";

export default function Page() {
  const CONTENT = {
    heading: "Alpha Tac",
    subheading: "An AI agent that can play the game of Ultimate Tic Tac Toe.",
  };
  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <Container>
          <Typography level={"heading1"}>{CONTENT.heading}</Typography>
          <Typography
            className="mt-4 sm:mt-8"
            color={"weaker"}
            level={"subheading"}
          >
            {CONTENT.subheading}
          </Typography>
        </Container>
      </Section>
    </main>
  );
}
