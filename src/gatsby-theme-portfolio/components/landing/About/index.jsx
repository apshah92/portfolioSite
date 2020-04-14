import React from "react";
import { useStaticQuery,graphql } from "gatsby";
import Container from "../../common/Container";
import { Wrapper,AboutWrapper } from "./styles";


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
            <AboutWrapper as={Container}>
                <div className="title"><h2>{title}</h2></div>
                <p> {description_one} </p>
                <p> {description_two} </p>
            </AboutWrapper>              
        </Wrapper>
    )

}