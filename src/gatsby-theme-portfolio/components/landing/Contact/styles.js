import styled,{css} from 'styled-components'

export const Wrapper = styled.div`
  box-size: border-box;
  background-image: ;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 110vh;
  @media(max-width:960px){
    height: 90vh;
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
    margin-left:%;
		margin-bottom: 2rem;
    padding-top: 10%;
    font-size: 26pt;
    text-align: center;
	}
	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
  .sendbutton {
    padding: 2% 3%;
    border: 1px solid;
    border-radius: 5%;
  }
    
`


export const formstyle = css`
  border: 0px solid green;
  @media(max-width: 960px){
      width: 100%;
    }  

  @media(min-width: 960px){
    width: 100%;
  }
  font-size: 14px;
  text-align: center;

  input,
  textarea {
    display: block;
    margin: 12px auto;
    width: 80%;
    border: 1px solid black;
    border-radius: 5px;
    outline: 0;
    font-size: 16px;

    @media(max-width: 960px){
      padding: 2px;
    }
    @media(min-width: 960px){
      padding: 6px;
    }
  }
  input {
    maxlength: 5000;
    height: 4vh;
  }
  textarea{
    height: 40vh;
  }
  .sendbutton {
    cursor: pointer;
  }
  
`