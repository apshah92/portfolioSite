import styled, {css} from "styled-components";
import colors from "tokens/colors";
import skillbg from "./images/skillbg2.jpg";

export const Wrapper = styled.div`
  @media(min-width:1200px){
    height: 700px;
  }  
  
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
`;

export const SkillImg = styled.div`
    background-image: url(${skillbg});
    background-attachment: fixed;
    background-size: contain;
    background-position: left top;
    background-repeat: no-repeat;
    border: 0px solid green;
    @media(min-width:400px){
        height:700px;
    }
    @media(max-width:400px){
        height: 200px;
    }
`

export const SkillIcons = styled.div`
  .title {
      height:10%;
      h2  { 
        @media(min-width:1200px){
            font-size: 30pt;
        }
      }
      
      text-align: center;
    }
  @media(min-width:960px){
      line-height:2;
  }
  @media(min-width:1200px){
    height:700px ;
  }
  

`

export const skillContainerCss = css`
  height:90%;
  width:100%;
  border:0px solid red;
  padding-left: 20%;
  padding-top: 10%;
  box-sizing: border-box;
  
`

// export const itemCss = css`
//   width:100%;
//   height: 130px;
  
//   margin-bottom: 20px;
//   border: 0px solid red;
//   `

export const imgCss = css`
  height:80px;
  width:70px;
  position: relative;
  cursor: pointer;
  border-radius: 10px; 
  margin-bottom: 20%;
  margin-right: 20%;
  img{
    height:80px;
    width:70px;
    
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
