import styled from "styled-components";
import colors from "tokens/colors";
import skillbg from "./images/skillbg.jpeg";

export const Wrapper = styled.div`
  @media(min-width:1200px){
    height: 700px;
  }  
  background-image: url(${skillbg});
  background-attachment: fixed;
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
  position:relative;
`;

export const SkillsWrapper = styled.div`  
  .title {
      margin-bottom: 2rem;
      color: #484848;
      text-align: center;
    }
  @media(min-width:900px){
      line-height:2;
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }

`;

export const Details = styled.div`
  
  position: absolute;
  top: 50%;
  left:50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);  

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }
  
  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
  table,th, td { 
    border:none;
    color:white;
    font-size:1.2em;
  }
  
`;

