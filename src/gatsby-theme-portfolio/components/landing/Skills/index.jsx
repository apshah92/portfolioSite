import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Flex, Item} from 'react-flex-ready';
import styled, {css} from 'styled-components';
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import Button from "gatsby-theme-portfolio/src/components/common/Button";
import SkillIllustration from "gatsby-theme-portfolio/src/components/illustrations/SkillIllustration";
import { Wrapper, SkillsWrapper, Details, skillContainerCss, SkillImg, SkillIcons, imgCss, itemCss } from "./styles";
import { js, react, reactnative, redux, python, sql, html, csslogo, graphql_logo, aws, git, nodejs } from "./images";

export default () => {
  var logos = [js, react,reactnative,redux,python,sql,html,csslogo,graphql_logo,aws,git,nodejs];  
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
      <SkillsWrapper>       
          <Flex >
            <Item col={6} gap={0} colTablet={6} colMobile={6} >
              <SkillImg/>
            </Item>
            <Item col={6} gap={0} colTablet={6} colMobile={6}>
              <SkillIcons>
                <div className="title"><h2>{title}</h2></div>
                <div css={skillContainerCss}>
                  <Flex col={12} className="flexDiv">
                    { logos.map( (item,index) => ( <Item col={4} colTablet={1} colMobile={1} css={itemCss}> <div css={imgCss}><img src={item} /></div> </Item> ) )}
                  </Flex>
                </div>
              </SkillIcons>
            </Item>
          </Flex>               
      </SkillsWrapper>
    </Wrapper>
  );
};