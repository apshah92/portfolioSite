import React from "react";
import Container from "components/common/Container";
import TalkIllustration from "components/illustrations/TalkIllustration";
import { Wrapper, Details, Thumbnail, MailForm } from "./styles";

export default () => (
  <Wrapper as={Container} id="contact">    
    <Details>
        <h2>Contact Me</h2>
      <MailForm to="ap.59.shah@gmail.com" titlePlaceholder="Subject" contentsPlaceholder="Message" titleMaxLength="1000" contentsMaxLength="5000"/>
    </Details>
    <Thumbnail>
      <TalkIllustration />
    </Thumbnail>
  </Wrapper>
);