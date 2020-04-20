import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from "gatsby-theme-portfolio/src/components/theme/Header";
import Title from './Title';
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import { Wrapper, IntroWrapper, Details, Button } from "./styles";


    
export default () => {
  const {
    content:{
      frontmatter:{ title, titleTwo, titleThree, action}
    }
  } = useStaticQuery(graphql`
      query {
        content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
          frontmatter {
            title
            titleTwo
            titleThree
            action
          }
        }
      }
    `);
  
    return (
      <Wrapper>
        <Header />
        <IntroWrapper as={Container} className="postSticky">
          <Details>
            <Title allTitles={[title,titleTwo,titleThree]} ></Title>  
            <AnchorLink href="#projects"><Button>Checkout My Works</Button></AnchorLink>         
          </Details>          
        </IntroWrapper>
      </Wrapper>
    );
  
  
};


