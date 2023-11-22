import styled from "styled-components";
import config from "../../config";

export const Foot = styled.div`
  background-color: ${config.colors.primary};
  color: ${config.colors.tertiary};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 7px;
  font-size: clamp(10px, 2vw, 55px);

  @media (max-width: 768px) {
    font-size: clamp(10px, 3vw, 20px);
  }

  @media (max-width: 414px) {
    font-size: clamp(10px, 4vw, 20px);
  }
`;
