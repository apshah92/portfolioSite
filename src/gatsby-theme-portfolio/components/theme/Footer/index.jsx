import React from "react";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import {Flex,Item} from 'react-flex-ready';
import { SocialIcon } from 'react-social-icons'; 
import { Wrapper, InfoWrapper } from "./styles";

export default () => (
  <footer>
    <Wrapper >
      <InfoWrapper as={Container}>
        <Flex>
          <Item col={4} colMobile={12}>
            <span>Powered by React, Gatsby and Graphql</span>
          </Item>
          <Item col={1} colMobile={4}>
            <SocialIcon url="https://www.linkedin.com/in/apshah0819" />            
          </Item>          
          <Item col={1} colMobile={4}>
            <SocialIcon url="https://github.com/apshah92" />            
          </Item>
          <Item col={1} colMobile={4}>
            <SocialIcon url="mailto:ap.59.shah@gmail.com" />           
          </Item>
        </Flex>
      </InfoWrapper>
    </Wrapper>      
  </footer>
);


            