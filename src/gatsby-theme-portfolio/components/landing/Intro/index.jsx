import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "gatsby-theme-portfolio/src/components/theme/Header";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import Button from "gatsby-theme-portfolio/src/components/common/Button";
import DevIllustration from "gatsby-theme-portfolio/src/components/illustrations/DevIllustration";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export default () => {
  const {
    content: {
      frontmatter: { title, description, action }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
  return (
    <Wrapper id="about">
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h2>{title}</h2>
          <h3>{description}</h3> 
          <Button as={AnchorLink} href="#contact">
            {action}
          </Button>
        </Details>
        <Thumbnail>
          <DevIllustration />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};