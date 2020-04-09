import React from "react";
import colors from "tokens/colors";
import { socialLinks } from "data";
import { Links } from "./styles";
import { Github, LinkedIn, Twitter } from "../../../social";

export default () => (
  <Links>    
    {socialLinks.github && (
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Folow me on GitHub"
      >
        <Github color={colors.primary} />
      </a>
    )}
    {socialLinks.twitter && (
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on Twitter"
      >
        <Twitter color={colors.primary} />
      </a>
    )}
    
    {socialLinks.linkedin && (
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with me on LinkedIn"
      >
        <LinkedIn color={colors.primary} />
      </a>
    )}
  </Links>
);
