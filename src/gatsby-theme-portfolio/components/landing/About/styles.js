import styled from 'styled-components';
import aboutbg from './images/about.jpg';

export const Wrapper = styled.div`
    background-image: url(${aboutbg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
    position: relative;
    height: 300px;
    @media(min-width:900px){
        height:600px;
    }
`

export const AboutWrapper = styled.div`
    padding: 2rem 0;
    .title{
        text-align: center;        
    } 
    position: absolute;
    top: 50%;
    left:50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media(min-width:900px){
        line-height:2;
    }
`