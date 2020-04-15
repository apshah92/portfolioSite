import styled from 'styled-components'
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
    margin-left: 70px;
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

export const Thumbnail = styled.div`
	flex: 1;
	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}
	img {
		width: 100%;
	}
    `

export const MailForm = styled(Form)`
  border: 0px solid black;
  max-width: 720px;
  min-height: 60vh;
  font-size: 14px;
  text-align: center;
  input,
  textarea {
    display: block;
    margin: 12px auto;
    width: 100%;
    max-width: 580px;
    border: 1px solid #555;
    border-radius: 5px;
    outline: 0;
    font-size: 16px;
    background-color:#A9A9A9;
  }
  input {
    padding: 12px 6px;
    maxlength: 5000;
  }
  textarea{
    padding: 6px;
    height: 300px;
  }
  a {
    display: block;
    margin: auto;
    width: 120px;
    height: 3em;
    line-height: 3em;
    color: #fff;
    background-color: #3B9CFF;
    font-size: 16px;
    font-weight: 900;
    text-decoration: blink;
    &:visited,
    &:hover,
    &:focus,
    &:active {
      color: #fff;
    }
    &:hover {
      opacity: .7;
    }
  }
`