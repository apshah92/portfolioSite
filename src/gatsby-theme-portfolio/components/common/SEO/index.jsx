import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "./thumbnail.jpg";
import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo
} from "data";

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  location = ""
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Person",
		"legalName": "${legalName}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],		
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.google} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
