import styled, {css} from 'styled-components';
import aboutbg from './images/about2.jpg';

export const Wrapper = styled.div`    
    width: 100%;
`

// export const AboutWrapper = styled.div`
//     padding: 2rem 0;
//     .title{
//         text-align: center;        
//     } 
//     position: absolute;
//     top: 50%;
//     left:50%;
//     -ms-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     @media(min-width:900px){
//         line-height:2;
//     }
// `

export const NewWrapper = styled.div`
    width: 100%;
`
// export const SkillImg = styled.div`      
//     background-image: ;
//     background-attachment: fixed;
//     background-repeat: no-repeat;
//     background-size: contain;
//     background-position: right top;
//     border: 0px solid green;
//     @media(min-width:400px){
//         height:600px;
//     }
//     @media(max-width:400px){
//         height: 200px;
//     }
// `

export const TextWrapper = styled.div`
    border: 1px solid black;
    height: 70vh;
    width: 100%;
    position: relative;   
    .container{
        margin: 0;
        position: absolute;
        top: 50%;
        left: 20%;
        -ms-transform: translate(-15%,-50%);
        transform: translate(-15%,-50%);
        border:0px solid;
        text-align: justify;        
    }
    .title {
        text-align: center;
    }
`
