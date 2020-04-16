import styled from "styled-components";
import colors from "tokens/colors";

export const Wrapper = styled.div`
  height: 100px;
  width:100%;
  background-color:black;   
  @media(max-width:600px){
    height:auto;
  }
`;


export const InfoWrapper = styled.div`  
  color:white;
`;