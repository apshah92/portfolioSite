import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import Button from "gatsby-theme-portfolio/src/components/common/Button";
import SkillIllustration from "gatsby-theme-portfolio/src/components/illustrations/SkillIllustration";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export default () => {    
  const {
    content: {
      frontmatter: { title, description, action }
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "skills" } }) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
  return (
    <Wrapper id="skills">
      <SkillsWrapper as={Container}>
      <Thumbnail>
          <SkillIllustration />
        </Thumbnail>
        <Details>
          <h2>{title}</h2>
          <table>
            <tr>
              <td>JavaScript</td>
              <td>React</td>
              <td>React-Native</td>
            </tr>
            <tr>
              <td>Redux</td>
              <td>Python</td>
              <td>SQL</td>
            </tr>
            <tr>
              <td>HTML</td>
              <td>CSS</td>
              <td>Graphql</td>
            </tr>
            <tr>
              <td>AWS</td>
              <td>Git</td>
              <td>Firebase</td>
            </tr>
          </table>
        </Details>        
      </SkillsWrapper>
    </Wrapper>
  );
};