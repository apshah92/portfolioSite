import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Container from "../../common/Container"
import {Flex,Item,css} from 'react-flex-ready'
import { Wrapper,AboutWrapper, NewWrapper,SkillImg,TextWrapper } from "./styles"


export default () => {
    const {
        content:{
            frontmatter : { title,description_one,description_two }
        }
    } = useStaticQuery(graphql`
        query {
            content: markdownRemark(frontmatter: { section: { eq: "about" } }) {
            frontmatter {    
                title
                description_one
                description_two                            
                }
            }
        }        
    `);

    return (
        <Wrapper id="about">
            <NewWrapper >
                <Flex>
                    <Item col={6} gap={0} colTablet={6} colMobile={12}>
                        <TextWrapper>
                            <div className="container">
                                <div className="title"><h2>{title}</h2></div>
                                <p> {description_one} </p>
                                <p> {description_two} </p>
                            </div>
                        </TextWrapper>
                    </Item>
                    <Item col={6} gap={0} colTablet={6} colMobile={12}>
                        <SkillImg className="aboutimage">
                        </SkillImg>
                    </Item>
                </Flex>
            </NewWrapper>              
        </Wrapper>
    )

}