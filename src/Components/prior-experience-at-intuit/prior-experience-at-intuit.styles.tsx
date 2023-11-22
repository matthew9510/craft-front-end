import styled from "styled-components";
import config from "../../config";

export const PriorExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2%;
`;

export const PriorExperienceHeading = styled.h2`
  font-size: clamp(10px, 3vw, 55px);
  margin-bottom: 0.75%;

  @media (max-width: 768px) {
    font-size: clamp(10px, 3.5vw, 25px);
    margin-bottom: 1.5%;
  }

  @media (max-width: 414px) {
    font-size: clamp(10px, 4vw, 20px);
    margin-bottom: 5%;
  }
`;

export const IntuitLogoAsImage = styled.img`
  width: auto;
  height: clamp(
    8px,
    2.5vw,
    50px
  ); /* Even smaller than the font-size of the heading */
  margin-left: 0.25vw;
  margin-right: 0.45vw;

  @media (max-width: 768px) {
    height: clamp(
      8px,
      2.8vw,
      20px
    ); /* Even smaller than the font-size of the heading */
    margin-left: 0.25vw;
    margin-right: 1vw;
  }

  @media (max-width: 414px) {
    height: clamp(
      8px,
      3.2vw,
      16px
    ); /* Even smaller than the font-size of the heading */
  }
`;

export const PriorExperienceUl = styled.ul`
  padding: 2% 3%;
  margin: 0px;
`;

export const PriorExperiencePoint = styled.li`
  font-weight: 350;
  font-size: clamp(10px, 2vw, 55px);
  color: grey;
  margin-bottom: 1%;
  list-style-type: none; /* Remove default bullet point */
  position: relative; /* Allow absolute positioning of children */

  &::before {
    content: "•"; /* Add custom bullet point */
    position: absolute;
    left: -0.6em; /* Position bullet point in front of text */
    color: {config.colors.secondary}; 
    font-size: 1.7em;
    top: -0.3em; /* Align bullet point with text */
  }

  @media (max-width: 768px) {
    font-size: clamp(10px, 3vw, 20px);
    margin-bottom: 3%;
  }

  @media (max-width: 414px) {
    font-size: clamp(10px, 4vw, 20px);
    margin-bottom: 5%;
  }
`;

export const StyledStrong = styled.strong`
  color: ${config.colors.primary};
`;
