import React from "react";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import Social from "./Social";
import { Wrapper, Flex, Details } from "./styles";

export default () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <p>@Developed using Gatsby and GraphQL </p>   
      </Details>
      <Social />   
    </Flex>
  </Wrapper>
);