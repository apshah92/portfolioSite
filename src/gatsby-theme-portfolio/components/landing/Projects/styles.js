import styled from "styled-components";
import projectsbg from "./images/projectsbg3.jpg";

export const Wrapper = styled.div`
  background-image:;
  background-attachment:fixed;
  background-size:cover;
  background-repeat:no-repeat;
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
      @media(min-width:700px){
        font-size: 30pt;
      }
      line-height: 100px;
    }
  }   
  }  
`;

export const VideoWrapper = styled.div`
  width:90%;
  height:auto;
  margin:70px auto 100px auto;
  box-shadow: 2px 2px 10px grey;
  border: 1px solid;
  padding:5%;
`



export const ParaWrapper = styled.div`
  padding-top: 10%;
  font-family: calibri;
  `


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
