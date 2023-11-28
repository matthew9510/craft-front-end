import styled from "styled-components";
import config from "./config";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh; // Ensure it takes at least the full height of the viewport; necessary for the footer to be at the bottom of the page
  display: flex;
  flex-direction: column;
`;

export const Greeting = styled.h1`
  margin-top: 0;
  padding: 0% 1%;
  color: ${config.colors.primary};
`;

export const RouterWrapper = styled.div`
  flex-grow: 1; // Ensure it takes up all available space
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
`;
