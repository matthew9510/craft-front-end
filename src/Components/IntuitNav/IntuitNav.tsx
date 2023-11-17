import React from "react";
import {Header, NavBar, NavBarImage, NavBarMintImage} from "./IntuitNav.styles";

const IntuitNav: React.FC = () => {
  return (
    <Header>
      <NavBar>
        <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/intuit_logo_RGB_blue.svg" alt="External SVG"/>
        <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-turbotax.svg" alt="External SVG"/>
        <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-credit-karma.svg" alt="External SVG"/>
        <NavBarMintImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-mint.svg" alt="External SVG"/>
        <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-quickbooks.svg" alt="External SVG"/>
        <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-mail-chimp.svg" alt="External SVG"/>
      </NavBar>
    </Header>
  );
};

export default IntuitNav;
