"use client";

import { Avatar, AvatarContainer, AvatarGroup } from "@ui/Avatar";
import { Section } from "@ui/Section";
import { Container } from "@ui/Container";
import { Palette } from "@ui/Palette";
import { AppNavHeader } from "@/components/composite/AppNavHeader";
import { Button, ButtonGroup } from "@ui/Button";
import { Card, CardContent } from "@ui/Card";
import { Typography } from "@ui/Typography";
import { Alert } from "@ui/Alert";
import { FiArrowLeft, FiArrowRight, FiPlus } from "react-icons/fi";
import { Input, InputAdornment, InputGroup } from "@ui/Input";

import {
  fadeAndSlideInFromLeft,
  fadeAndSlideInFromRight,
} from "@/utils/animations";
import { motion } from "framer-motion";
import { SplitContainer, SplitItem } from "@ui/Split";
import { Heading } from "@ui/Heading";

export default function Page() {
  const MotionSplitContainer = motion(SplitContainer);
  const MotionSplitItem = motion(SplitItem);

  return (
    <main className="min-h-screen overflow-hidden">
      <AppNavHeader />
      <Section>
        <Container>
          <Palette />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading level="h1" palette="base">
            hello dude.
          </Heading>
          <Heading level="h1" palette="weak">
            hello dude.
          </Heading>
          <Heading level="h1" palette="weaker">
            hello dude.
          </Heading>
          <Heading level="h1" palette="primary">
            hello dude.
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <AvatarGroup>
            <Avatar
              size="sm"
              src="https://placekitten.com/200/200"
            >{`CF`}</Avatar>
            <Avatar size="sm">{`CF`}</Avatar>
            <Avatar
              size="sm"
              src={"https://placekitten.com/240/240"}
            >{`CF`}</Avatar>
            <Avatar size="sm">{`+5`}</Avatar>
          </AvatarGroup>
          <AvatarGroup>
            <Avatar
              size="md"
              src="https://placekitten.com/200/200"
            >{`CF`}</Avatar>
            <Avatar size="md">{`CF`}</Avatar>
            <Avatar
              size="md"
              src={"https://placekitten.com/240/240"}
            >{`CF`}</Avatar>
            <Avatar size="md">{`+5`}</Avatar>
          </AvatarGroup>
          <AvatarGroup>
            <Avatar
              size="lg"
              src="https://placekitten.com/200/200"
            >{`CF`}</Avatar>
            <Avatar size="lg">{`CF`}</Avatar>
            <Avatar
              size="lg"
              src={"https://placekitten.com/240/240"}
            >{`CF`}</Avatar>
            <Avatar size="lg">{`+5`}</Avatar>
          </AvatarGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul className="space-y-4">
            <li>
              <Button intent="secondary">click</Button>
            </li>
            <li>
              <Button size="lg" intent="primary">
                clock
              </Button>
            </li>
            <li>
              <Button intent="destructive">clack</Button>
            </li>
            <li>
              <Button disabled>clack</Button>
            </li>
            <li>
              <ButtonGroup>
                <Button intent="secondary">
                  <FiArrowLeft size={24} />
                </Button>
                <Button intent="secondary">
                  <FiPlus size={24} />
                </Button>
                <Button intent="secondary">
                  <FiArrowRight size={24} />
                </Button>
              </ButtonGroup>
            </li>
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="mt-6" elevation="high">
            <CardContent>
              <AvatarContainer>
                <Avatar src="https://placekitten.com/220/220">{`CF`}</Avatar>
                <div>
                  <Heading level="h3">Cat Catterson</Heading>
                  <Typography level="body" palette="weaker">
                    Head of CATering
                  </Typography>
                </div>
              </AvatarContainer>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-4">
          <Alert title="Success alert" status="success">
            Alert body. Some text or maybe some JSX goes here.
          </Alert>
          <Alert title="Info alert" status="info">
            Alert body. Some text or maybe some JSX goes here.
          </Alert>
          <Alert title="Warning alert" status="warning">
            Alert body. Some text or maybe some JSX goes here.
          </Alert>
          <Alert title="Danger alert" status="danger">
            Alert body. Some text or maybe some JSX goes here.
          </Alert>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 flex-col gap-4 sm:grid-cols-2">
          <Input placeholder="example@email.com" />
          <Input value="a" pattern="[0-9]*" />
          <Input disabled value="N/A" />
          <InputGroup>
            <InputAdornment>https://</InputAdornment>
            <Input placeholder="maxrandle.co.nz" />
          </InputGroup>
          <InputGroup className="sm:col-span-2">
            <Input />
            <InputAdornment>to</InputAdornment>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputAdornment>$</InputAdornment>
            <Input />
          </InputGroup>
          <InputGroup>
            <Input />
            <InputAdornment>kg</InputAdornment>
          </InputGroup>
        </Container>
      </Section>

      <Section palette={"surface"}>
        <Container>
          <MotionSplitContainer
            className="mt-20"
            variants={{
              visible: {
                transition: {
                  delayChildren: 0,
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <MotionSplitItem
              className="row-span-2"
              side="left"
              variants={fadeAndSlideInFromLeft}
            >
              <Card palette={"base"}>
                <CardContent>
                  <Typography>1 Left</Typography>
                </CardContent>
              </Card>
            </MotionSplitItem>
            <MotionSplitItem
              className="row-span-2 row-start-2"
              side="right"
              variants={fadeAndSlideInFromRight}
            >
              <Card palette={"base"}>
                <CardContent>
                  <Typography>2 Right</Typography>
                </CardContent>
              </Card>
            </MotionSplitItem>
            <MotionSplitItem
              className="row-span-2"
              side="right"
              variants={fadeAndSlideInFromRight}
            >
              <Card palette={"base"}>
                <CardContent>
                  <Typography>3 Right</Typography>
                </CardContent>
              </Card>
            </MotionSplitItem>
            <MotionSplitItem
              className="row-span-2"
              side="left"
              variants={fadeAndSlideInFromLeft}
            >
              <Card palette={"base"}>
                <CardContent>
                  <Typography>4 Left</Typography>
                </CardContent>
              </Card>
            </MotionSplitItem>
            <MotionSplitItem
              className="row-span-2"
              side="left"
              variants={fadeAndSlideInFromLeft}
            >
              <Card palette={"base"}>
                <CardContent>
                  <Typography>5 Left</Typography>
                </CardContent>
              </Card>
            </MotionSplitItem>
          </MotionSplitContainer>
        </Container>
      </Section>
    </main>
  );
}
