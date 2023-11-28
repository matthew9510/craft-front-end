import styled from "styled-components";
import config from "../../config";

export const PriorExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2%;
`;

export const PriorExperienceHeading = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 0.75%;

  @media (max-width: 1201px) {
    font-size: 2.7rem;
    margin-bottom: 1.5%;
  }
  @media (max-width: 1025px) {
    font-size: 2rem;
    margin-bottom: 1.5%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5%;
  }

  @media (max-width: 414px) {
    font-size: 0.7rem;
    margin-bottom: 5%;
  }
`;
export const IntuitLogoAsImage = styled.img`
  width: auto;
  height: 2.5rem;
  margin-left: 0.25vw;
  margin-right: 0.45vw;

  @media (max-width: 1201px) {
    height: 2rem;
  }

  @media (max-width: 1025px) {
    height: 1.6rem;
  }

  @media (max-width: 768px) {
    height: 0.8rem;
    margin-left: 0.25vw;
    margin-right: 1vw;
  }

  @media (max-width: 414px) {
    height: 0.6rem;
  }
`;

export const PriorExperienceUl = styled.ul`
  padding: 2% 3%;
  margin: 0px;
`;

export const PriorExperiencePoint = styled.li`
  font-weight: 350;
  font-size: 2.5rem;
  color: grey;
  margin-bottom: 1.4%;
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
  
  @media (max-width: 1025px) {
    font-size: 2rem;
    margin-bottom: 1.5%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3%;
  }

  @media (max-width: 414px) {
    font-size: 0.7rem;
    margin-bottom: 5%;
  }
`;

export const StyledStrong = styled.strong`
  color: ${config.colors.primary};
`;
