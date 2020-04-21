import React from "react";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import {Flex,Item} from 'react-flex-ready';
import { SocialIcon } from 'react-social-icons'; 
import { Wrapper, InfoWrapper,FlexStyle } from "./styles";

export default () => (
  <footer>
    <Wrapper >
      <InfoWrapper as={Container}>
        <Flex as="div" col={8} css={FlexStyle} >
          <Item col={9} colMobile={12} colTablet={6}>
            <span>Powered by React, Gatsby and Netlify</span>
          </Item>
          <Item col={1} colMobile={4} colTablet={2}>
            <SocialIcon url="https://www.linkedin.com/in/apshah0819" />            
          </Item>          
          <Item col={1} colMobile={4} colTablet={2}>
            <SocialIcon url="https://github.com/apshah92" />            
          </Item>
          <Item col={1} colMobile={4} colTablet={2}>
            <SocialIcon url="mailto:ap.59.shah@gmail.com" />           
          </Item>
        </Flex>
      </InfoWrapper>
    </Wrapper>      
  </footer>
);


            