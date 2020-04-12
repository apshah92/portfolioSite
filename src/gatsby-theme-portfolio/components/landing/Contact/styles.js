import styled from 'styled-components'
import Form from './form'

export const Wrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	@media (max-width: 960px) {
		flex-direction: column;
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
	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}
	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
    h2 {
        color: #484848; 
        text-align: justify;
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
  margin: auto;
  max-width: 720px;
  min-height: 60vh;
  font-size: 14px;
  text-align: center;
  input,
  textarea {
    display: block;
    margin: 12px 0;
    width: 100%;
    max-width: 580px;
    border: 1px solid #555;
    border-radius: 5px;
    outline: 0;
    font-size: 16px;
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