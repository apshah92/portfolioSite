import styled from "styled-components";
import colors from "tokens/colors";
import introbg from "./images/introbg3.jpg";

export const Wrapper = styled.div`
  @media(min-width: 960px){
    height: 600px;
  }
  @media(max-width:960px){
    background-size:contain;
  }
  
    
    background-image: url(${introbg});
    background-attachment: fixed;
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;  
  
  
`;


export const IntroWrapper = styled.div`
  position:relative;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;  
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
        text-align:center;
        color: white;
        font-family: Cambria;
        @media(min-width:900px){
            font-size: 28pt;
        }
    }
`;