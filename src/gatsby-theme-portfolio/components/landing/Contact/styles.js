import styled,{css} from 'styled-components'
import Form from './form'
import contactbg from "./images/contactbg.jpg"

export const Wrapper = styled.div`
  background-image: url(${contactbg});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
	@media (min-width: 120px) {
		height: 1000px;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-right: 2rem;

	@media (max-width: 960px) {
		padding-right: unset;
		width: 100%;
		order: 1;
	}
	h2 {
    margin-left:3%;
		margin-bottom: 2rem;
    padding-top: 70px;
		font-size: 26pt;
		color: White;
	}
	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
    
`


export const formstyle = css`
  border: 0px solid green;
  @media(max-width: 400px){
      width: 100%;
    }  

  @media(min-width: 960px){
    width: 60%;
  }
  font-size: 14px;
  text-align: center;

  input,
  textarea {
    display: block;
    margin: 12px auto;
    width: 90%;
    border: 0px solid #555;
    border-radius: 5px;
    outline: 0;
    font-size: 16px;
    background-color:#A9A9A9;

    @media(max-width: 400px){
      padding: 2px;
    }
    @media(min-width: 960px){
      padding: 6px;
    }
  }
  input {
    maxlength: 5000;
  }
  textarea{
    @media(min-width:960px){
       height: 300px;
    }   
  }
  
`