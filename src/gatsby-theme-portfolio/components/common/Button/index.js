import styled from "styled-components";
import colors from "tokens/colors";

const Button = styled.button`
  cursor: pointer;
  border-radius: 20px;
  padding: 0.4em 1.3em;
  border: ${ props => props.border || "none"};
  margin-right: 1vw;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 0.7rem;
  color: ${({ textColor }) => textColor || "#fff"};
  background: ${({ bg }) => bg || colors.buttonColor};

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
`;

export default Button;
