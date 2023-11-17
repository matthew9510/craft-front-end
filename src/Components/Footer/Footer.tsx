import React from "react";
import { Foot } from "./Footer.styles";

const Footer: React.FC = () =>{
    return (
        <Foot>
            <p>Made with React and Styled-Components 🪄 by <a href="https://matthewhess.io/" target="__blank">Matthew Hess</a></p>
            <p>Click here to learn more about Matthew's prior work experience with Intuit</p>
        </Foot>
    )
}

export default Footer;