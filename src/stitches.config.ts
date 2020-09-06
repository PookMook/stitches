import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  tokens: {
    colors: {
      $primary: "navy",
      $secondary: "blue",
      $background: "white",
      $textColor: "black",
      $destructive: "#9b1010",
      $constructive: "#178917",
    },
    space: {
      $none: "0",
      $s: "0.25rem",
      $m: "0.5rem",
      $l: "0.75rem",
    },
    fontSizes: {
      $xs: "0.6785rem",
      $s: "0.75rem",
      $m: "1rem",
      $l: "1.25rem",
      $xl: "1.5365rem",
    },
  },
  breakpoints: {
    tablet: (rule) => `@media (min-width:500px) {${rule}}`,
    desktop: (rule) => `@media (min-width:1024px) {${rule}}`,
    print: (rule) => `@media print {${rule}}`,
  },
  utils: {},
});

export const reset = {
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "1rem",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: "border-box",
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section": {
    display: "block",
  },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
    // @ts-ignore
    content: "none",
  },
  table: {
    borderSpacing: "0",
  },
};
