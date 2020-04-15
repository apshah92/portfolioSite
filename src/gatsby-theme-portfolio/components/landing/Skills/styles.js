import styled, {css} from "styled-components";
import colors from "tokens/colors";
import skillbg from "./images/skillbg.jpeg";

export const Wrapper = styled.div`
  @media(min-width:1200px){
    height: 800px;
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
      h2  { 
        @media(min-width:1200px){
            font-size: 30pt;
        }
      }
      margin-bottom: 2rem;
      color: white;
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

export const skillContainerCss = css`
  @media(min-width:1200px){
    width: 1000px;
  }
  

`

export const itemCss = css`
  width:100%;
  height: 130px;
  
  margin-bottom: 20px;
  border: 0px solid red;
  `

export const imgCss = css`
  height:100%;
  width:100%;
  position: relative;
  cursor: pointer;
  border-radius: 10px; 

  img{
    height:80px;
    width:70px;
    position: absolute;
    top: 50%;
    left:50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 10px;
    transition: top ease 0.5s, box-shadow ease 0.5s ;
  }  
  img:hover {
    top: 40%;   
  }
  `
