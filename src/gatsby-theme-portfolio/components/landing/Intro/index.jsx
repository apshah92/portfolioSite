import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "gatsby-theme-portfolio/src/components/theme/Header";
import Title from './Title';
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import Button from "gatsby-theme-portfolio/src/components/common/Button";
import DevIllustration from "gatsby-theme-portfolio/src/components/illustrations/DevIllustration";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";


    
export default () => {
  const {
    content:{
      frontmatter:{ title, titleTwo, action}
    }
  } = useStaticQuery(graphql`
      query {
        content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
          frontmatter {
            title
            titleTwo
            
            action
          }
        }
      }
    `);
  
    return (
      <Wrapper >
        <Header />
        <IntroWrapper as={Container}>
          <Details>
            <Title allTitles={[title,titleTwo]} ></Title>           
          </Details>          
        </IntroWrapper>
      </Wrapper>
    );
  
  
};


