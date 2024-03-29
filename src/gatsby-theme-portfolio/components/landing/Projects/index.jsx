import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Item } from "react-flex-ready";
import Container from "components/common/Container";
import Button from "components/common/Button";
import Card from "components/common/Card";
import starIcon from "assets/icons/star.svg";
import forkIcon from "assets/icons/fork.svg";
import { Wrapper,ProjectsWrapper, VideoWrapper, ParaWrapper, Content, Stats } from "./styles";
import projectVideo from "../../../../../media/gbookslibrary.mp4";


export default () => {
  const {
    github: {
      viewer: {
        repositories: { edges }
      }
    }
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 12
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper id="projects">      
      <ProjectsWrapper as={Container}> 
      <div className="title"><h2>Projects</h2></div>       
        <VideoWrapper>
            <Flex>
              <Item key={1} col={6}>
                <h3>Google Books Library</h3>
                <video height="auto" width="100%" autoplay="true" muted="true" loop="true" style={{border:"2px solid"}} controls >
                  <source src={projectVideo} type="video/mp4" />
                </video>
              </Item>
              <Item key={2} col={5} >
                <ParaWrapper>
                  <p> 
                  Google Books Library is a client interface for Google Books API. User can search any book, volume on google books database
                  through search module on this page and results will be displayed in nice books cards with basic information about the book.
                  Clickable card should take you to respective google book page.
                  
                  <br/><br/>Technology stack : React, Redux, Node.js, Express, TypeScript, HTML5, SCSS, Materialize UI, Heroku, Git
                  </p>
                  <p>
                    <a target="_blank" href="http://gbookslibrary.herokuapp.com"><Button>View Live</Button></a>
                    <a target="_blank" href="https://github.com/apshah92/googlebooks-client"><Button bg="white" textColor="black" border="1px solid">GitHub</Button></a>
                  </p>
                </ParaWrapper>
              </Item>
            </Flex>
        </VideoWrapper>
        <Flex col={4}>
          {edges.map(
            ({ node: { id, url, name, description, stargazers, forkCount } }) => (
              <Item
                key={id}
                col={4}
                colTablet={6}
                colMobile={12}
                marginBottom={30}
                gap={1}
                stretch
              >
                <Card as="a" href={url} target="_blank" rel="noopener noreferrer">
                  <Content>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </Content>
                  <Stats>
                    <div>
                      <img src={starIcon} alt="stars" />
                      <span>{stargazers.totalCount}</span>
                    </div>
                    <div>
                      <img src={forkIcon} alt="forks" />
                      <span>{forkCount}</span>
                    </div>
                  </Stats>
                </Card>
              </Item>
            )
          )}
        </Flex>
      </ProjectsWrapper>
    </Wrapper>
  );
};
