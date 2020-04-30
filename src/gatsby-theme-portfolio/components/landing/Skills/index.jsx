import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {Flex, Item} from 'react-flex-ready';
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import { Wrapper, SkillsWrapper, skillContainerCss, SkillIcons, imgCss, itemCss } from "./styles";
import { js, react, reactnative, redux, python, sql, html, csslogo, graphql_logo, aws, git, nodejs } from "./images";

export default () => {
  var logos = [js, react,reactnative,redux,python,sql,html,csslogo,graphql_logo,aws,git,nodejs];  
  const {
    content: {
      frontmatter: { title}
    }
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "skills" } }) {
        frontmatter {
          title          
        }
      }
    }
  `);
  return (
    <Wrapper id="skills" as={Container}>
      <SkillsWrapper >       
          <Flex >            
            <Item col={12} gap={1} colTablet={12} colMobile={12}>
              <SkillIcons>
                <div className="title"><h2>{title}</h2></div>
                <div css={skillContainerCss}>
                  <Flex col={12} className="flexDiv">
                    { logos.map( (item,index) => ( <Item col={4} colTablet={4} colMobile={2} css={itemCss}> <div css={imgCss}><img src={item} /></div> </Item> ) )}
                  </Flex>
                </div>
              </SkillIcons>
            </Item>
          </Flex>               
      </SkillsWrapper>
    </Wrapper>
  );
};