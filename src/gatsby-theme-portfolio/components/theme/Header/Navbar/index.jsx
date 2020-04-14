import React from "react";
import { Link } from "gatsby";
import { defaultTitle } from "data";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import NavbarLinks from "gatsby-theme-portfolio/src/components/theme/Header/NavbarLinks";
import { Wrapper } from "./styles";

export default () => (
  <Wrapper as={Container}>
    <h3><Link to="/">{defaultTitle}</Link></h3>
    <NavbarLinks desktop />
  </Wrapper>
);