import React from "react";
import { styled, css, reset } from "~/stitches.config";

const darkTheme = css.theme({
  colors: {
    $background: "#303030",
    $textColor: "#f0f0f0",
  },
  space: {
    $s: "0.5rem",
    $m: "1rem",
    $l: "1.5rem",
  },
  fontSizes: {
    $xl: "2rem",
  },
});

css.global(reset);

const Title = styled("h1", {
  fontSize: "$xl",
  marginBottom: "$l",
  color: "$constructive",
  backgroundColor: "yellow",
  ":hover": {
    color: "$destructive",
  },
});

const SubTitle = styled("h2", {
  fontSize: "$l",
  marginBottom: "$l",
  color: "$constructive",
});

const BaseButton = styled("button", {
  outline: "none",
  border: "none",
  cursor: "pointer",
  backgroundColor: "$background",
  color: "$textColor",
  variants: {
    shadow: {
      true: {
        boxShadow: "8px 8px 8px #00000040",
      },
    },
  },
});

const Button = styled(BaseButton, {
  padding: "$s $s",
  tablet: {
    padding: "$s $m",
  },
  desktop: {
    padding: "$m $l",
  },
  print: {
    padding: "4rem",
  },
});

const ConstructButton = styled(Button, {
  backgroundColor: "$constructive",
  color: "white",
});

const DestructButton = styled(Button, {
  backgroundColor: "$destructive",
  color: "white",
});

const ButtonGroup = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  variants: {
    ordered: {
      true: {
        [`> ${DestructButton}`]: {
          order: -1,
        },
        [`> ${ConstructButton}`]: {
          order: 1,
        },
      },
    },
  },
});

const SideBySide = styled("div", {
  display: "grid",
  gridTemplate: '"dark light" auto / 1fr 1fr',
});

export default function Main() {
  return (
    <SideBySide>
      <div className={darkTheme}>
        <Title>Hello world</Title>
        <SubTitle>Just testing</SubTitle>
        <ButtonGroup ordered>
          <ConstructButton>Create</ConstructButton>
          <DestructButton css={{ color: "yellow" }}>Delete</DestructButton>
          <Button>Cancel</Button>
        </ButtonGroup>
      </div>
      <div>
        <Title>Hello world</Title>
        <SubTitle>Just testing</SubTitle>
        <ButtonGroup ordered>
          <ConstructButton>Create</ConstructButton>
          <DestructButton css={{ color: "yellow" }}>Delete</DestructButton>
          <Button>Cancel</Button>
        </ButtonGroup>
      </div>
    </SideBySide>
  );
}
