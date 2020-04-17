import styled,{css} from "styled-components";
import colors from "tokens/colors";

export const Wrapper = styled.div`
  height: 100px;
  width:100%;
  background-color:black;   
  @media(max-width:960px){
    height:auto;
  }
`;


export const InfoWrapper = styled.div`  
  color:white;
  height: 100%;
  border: 0px solid green;
`;


export const FlexStyle = css`
  border: 0px solid red;
  height: 100%;
  width:90%;
  margin:auto;
  padding: 2% 2%;
  box-sizing: border-box;
  
`