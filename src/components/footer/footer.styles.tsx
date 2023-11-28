import styled from "styled-components";
import config from "../../config";

export const Foot = styled.div`
  background-color: ${config.colors.primary};
  color: ${config.colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 7px;
  font-size: clamp(10px, 2vw, 55px);
  padding: -2%;

  @media (max-width: 768px) {
    font-size: clamp(10px, 2.7vw, 20px);
  }

  @media (max-width: 414px) {
    font-size: clamp(10px, 2.5vw, 20px);
  }
  @media (max-width: 375px) {
    font-size: clamp(10px, 2vw, 20px);
    line-height: 1.5; // adjust line height to make it easier to read on mobile
    text-align: center; // center text on mobile since the footer contains a lot of text
  }
`;
