import React from "react";
import {Foot} from "./footer.styles";
// import {Link} from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Foot data-testid="Footer">
      <p>
        Made with React and 🪄 Styled-Components by{" "}
        <a href="https://matthewhess.io/" target="__blank">
          Matthew Hess
        </a>
      </p>
      {/* <p>
        <Link to="/prior-experience">
          Click here to learn more about Matthew&apos;s prior work experience
          with Intuit
        </Link>
      </p> */}
    </Foot>
  );
};

export default Footer;
