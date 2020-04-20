import styled, {css} from "styled-components";
import colors from "tokens/colors";
import skillbg from "./images/skillbg2.jpg";

export const Wrapper = styled.div`
  height: 40vh;
  @media(min-width:960px){
    height: 90vh;
  }  
  border:0px solid black;
  opacity: 0.85;
`;

// export const Details = styled.div`  
//   position: absolute;   

//   @media (max-width: 960px) {
//     padding-left: unset;
//     width: 100%;
//   }
  
//   p {
//     margin-bottom: 2.5rem;
//     font-size: 20pt;
//     font-weight: normal;
//     line-height: 1.3;
//     color: #707070;
//   }
//   table,th, td { 
//     border:none;
//     color:white;
//     font-size:1.2em;
//   }
  
// `;

export const SkillsWrapper = styled.div` 
  height: 100%;
  width: 100%;
  border: 0px solid blue;
`;

// export const SkillImg = styled.div`
//     background-image: url(${skillbg});
//     background-attachment: fixed;
//     background-size: contain;
//     background-position: left top;
//     background-repeat: no-repeat;
//     border: 0px solid green;
//     @media(min-width:400px){
//         height:700px;
//     }
//     @media(max-width:400px){
//         height: 200px;
//     }
// `

export const SkillIcons = styled.div`
  .title {
      height:15%;
      h2  { 
        @media(min-width:960px){
            font-size: 30pt;
        }
      }
      
      text-align: center;
    }
  @media(min-width:960px){
      line-height:2;  
      height: 100%;
      width:100%;    
  }  
`

export const skillContainerCss = css`
  height:85%;
  width:100%;
  margin: auto;
  border:0px solid red;  
  box-sizing: border-box;
  @media(min-width: 960px){
    padding-left: 0vw;
    width: 80%;
  }
  
`

export const itemCss = css`
  height: 10vh;
  @media(min-width:700px){
    height: 15vh;
  }
  margin-bottom: 20px;
  border: 0px solid yellow;
  `

export const imgCss = css`
  height:100%;
  position: relative;
  cursor: pointer;
  border-radius: 10px; 
  margin-bottom: 20%;
  img{
    height:75%;
    width:22%;
    @media(max-width:500px){
      width: 80%;
    }
    position: absolute;
    top: 50%;
    left:50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 10px;
    transition: top ease 0.1s, box-shadow ease 0.1s ;
  }  
  img:hover {
    top: 40%;   
  }
  `
