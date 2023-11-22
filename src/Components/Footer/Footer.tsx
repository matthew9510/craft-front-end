import React from "react";
import {Foot} from "./footer.styles";

const Footer: React.FC = () => {
  return (
    <Foot data-testid="Footer">
      <p>
        Made with React and Styled-Components 🪄 by{" "}
        <a href="https://matthewhess.io/" target="__blank">
          Matthew Hess
        </a>
      </p>
      <p>
        Click here to learn more about Matthew&apos;s prior work experience with
        Intuit
      </p>
    </Foot>
  );
};

export default Footer;
