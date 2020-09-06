import React from "react";
import styled, { withTheme, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    $primary: "navy",
    $secondary: "blue",
    background: "white",
    textColor: "black",
    destructive: "#9b1010",
    constructive: "#178917",
  },
  spaces: {
    none: "0",
    s: "0.25rem",
    m: "0.5rem",
    l: "0.75rem",
  },
  fontSizes: {
    xs: "0.6785rem",
    s: "0.75rem",
    m: "1rem",
    l: "1.25rem",
    xl: "1.5365rem",
  },
};

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: green;
  background-color: yellow;
  &:hover {
    color: red;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: green;
`;

const BaseButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: ${({ shadow }) => (shadow ? "8px 8px 8px #00000040" : "none")};
`;

const Button = styled(BaseButton)`
  padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.s};
  @media screen AND (min-width: 500px) {
    padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.m};
  }
  @media screen AND (min-width: 1024px) {
    padding: ${({ theme }) => theme.spaces.m} ${({ theme }) => theme.spaces.l};
  }
  @media print {
    padding: 4rem;
  }
`;

const ConstructButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.constructive};
  color: white;
`;
const DestructButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.destructive};
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  ${({ ordered }) => {
    if (ordered) {
      return `> ${DestructButton}{
        order:-1;
    }
    > ${ConstructButton}{
        order:1;
    }
    `;
    }
  }}
`;

export default function HoC() {
  return (
    <ThemeProvider theme={theme}>
      <WithStyle />
    </ThemeProvider>
  );
}

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Title>Hello world</Title>
        <SubTitle>Just testing</SubTitle>
        <ButtonGroup darkTheme ordered>
          <ConstructButton>Create</ConstructButton>
          <DestructButton css={{ color: "yellow" }}>Delete</DestructButton>
          <Button>Cancel</Button>
        </ButtonGroup>
      </>
    </ThemeProvider>
  );
}

const WithStyle = withTheme(Main);
