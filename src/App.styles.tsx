import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh; // Ensure it takes at least the full height of the viewport; necessary for the footer to be at the bottom of the page
  display: flex;
  flex-direction: column;
`;
