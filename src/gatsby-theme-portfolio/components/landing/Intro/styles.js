import styled, {css} from "styled-components";
import introbg from "./images/intro_experiment3.png";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  @media(max-width:500px){
    height: 50vh;
  }
  background-image: url(${introbg});
  background-position:right top;
  background-size: contain;
  background-repeat: no-repeat;  
  
  
`;


export const IntroWrapper = styled.div`
  border:0px solid green;
  padding-top: 20vh;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  
  @media(min-width:960px){
    padding-top: 30vh;
  }
`;

export const Details = styled.div`
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 2rem;    
    color: ; 
    text-align: justify;  
  }
  h3 {
    margin-bottom: 2rem;
    font-weight: normal;
    color: #707070;  
    text-align: justify;  
  } 
  p {
    text-align: justify;
    margin-bottom: 2rem;
    font-family: Calibri;
    font-size: 1.2em;
    @media(min-width: 200px) {
      width: 80%;
    }    
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
    h2 {
        text-align:;
        color: black;
        font-family: Cambria;
        font-weight: normal;
        font-size: 4vw;        
    }
`;


export const Button = styled.button`
    font-family: "Calibri";
    font-weight: normal;
    font-size: 2vw;
    cursor: pointer;
    height: auto;
    width: auto;
    background-color: white;
    border: 2px solid;
    margin : 2vh 0;
    padding: 1%;
    
`