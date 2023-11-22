import React from "react";
import {Header, NavBar, NavBarImage, NavBarMintImage} from "./IntuitNav.styles";
import config from "../../config";

const IntuitNav: React.FC = () => {
  return (
    <Header>
      <NavBar>
        <NavBarImage
          src={config.IntuitLogoAsSVG}
          alt="Intuit Logo as External SVG"
        />
        <NavBarImage
          src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-turbotax.svg"
          alt="Intuit's TurboTax Logo as External SVG"
        />
        <NavBarImage
          src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-credit-karma.svg"
          alt="Intuit's Credit Karma Logo as External SVG"
        />
        <NavBarMintImage
          src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-mint.svg"
          alt="Intuit's Mint Logo as External SVG"
        />
        <NavBarImage
          src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-quickbooks.svg"
          alt="Intuit's QuickBooks Logo as External SVG"
        />
        <NavBarImage
          src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-mail-chimp.svg"
          alt="Intuit's MailChimp Logo as External SVG"
        />
      </NavBar>
    </Header>
  );
};

export default IntuitNav;
