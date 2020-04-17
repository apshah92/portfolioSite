import styled from "styled-components";
import projectsbg from "./images/projectsbg3.jpg";

export const Wrapper = styled.div`
  background-image: url(${projectsbg});
  background-attachment:fixed;
  background-size:cover;
  background-repeat:no-repeat;
  color: white;
  opacity: 0.8;
`

export const ProjectsWrapper = styled.div`
  padding: 2rem 0;
  .title{
    @media(min-width: 900px){
      height: 100px;
      line-height: 100px;
    }
    h2{
      text-align:center;
      font-size: 30pt;
      line-height: 100px;
    }
  }   
  }  
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;
