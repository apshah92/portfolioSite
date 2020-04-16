import React from "react";
import Container from "components/common/Container";
import MailForm from './form';
import { Wrapper, Details, Thumbnail } from "./styles";

export default () => (
  <Wrapper id="contact">    
    <Details as={Container}>
      <h2>Contact</h2>
      <MailForm/>
    </Details>    
  </Wrapper>
);