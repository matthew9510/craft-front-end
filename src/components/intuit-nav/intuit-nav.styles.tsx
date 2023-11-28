import styled from "styled-components";

export const Header = styled.header`
  max-width: 100%;
  margin-top: 10px;
  width: 100%;
`;

export const NavBar = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  align-items: center;
  background-color: #fff; /* Set your desired background color */
  padding: 1% 1%; /* Adjust padding as needed */
`;

export const NavBarImage = styled.img`
  max-width: 16%;
  height: auto;
  margin-right: 1%; /* Add some spacing between the images */
  @media (max-width: 768px) {
    max-width: 16%;
  }
`;
export const NavBarTurboImage = styled.img`
  max-width: 12%;
  height: auto;
  margin-right: 1%; /* Add some spacing between the images */

  @media (max-width: 768px) {
    max-width: 12%;
  }
`;

export const NavBarMintImage = styled.img`
  max-width: 8%;
  height: auto;
  margin-right: 1%; /* Add some spacing between the images */

  @media (max-width: 768px) {
    max-width: 8%;
  }
`;
