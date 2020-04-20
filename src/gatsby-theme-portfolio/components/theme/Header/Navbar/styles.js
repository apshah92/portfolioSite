import styled from 'styled-components'

export const Wrapper = styled.div`
	width:100%;
	height:auto;	
	${props => props.className == "sticky" ?
	 {
		"box-shadow": "0px 5px 5px grey",
		"background-color": "white",
		"position": "-webkit-fixed",
		"position": "fixed",
		"top": "0",
		"border": "0px solid red",
		"z-index": "1"
	 }	: ""
	};

	`

export const NavWrapper = styled.div`
	width:80%;
	margin: auto;
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 0px solid blue;
	
	a {
		color: black;
	}
`
