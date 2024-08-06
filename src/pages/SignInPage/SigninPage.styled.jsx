import styled from "styled-components";
import { devices } from "../../const/breakpoints";
import desktop from "../../images/register/background-desktop.png";
import mobile from "../../images/register/background-mobile.png";
import tablet from "../../images/register/background-tablet.png";
export const Section = styled.section`
  padding: 87px 20px 118px 20px;
  width: 100%;
  min-height: 812px;
  height: 100vh;
  background-color: #fafafa;
  background-image: url(${mobile});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  display: flex;
  justify-content: center;

  @media only screen and ${devices.tablet} {
    padding: 96px 20px 59px 20px;
    min-height: 0;
    background-image: url(${tablet});
  }
  @media only screen and ${devices.desktopMini} {
    padding: 0;
    background-image: url(${desktop});
  }
  @media only screen and ${devices.desktop} {
    padding: 0;
    background-image: url(${desktop});
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media only screen and ${devices.desktopMini} {
    max-width: 1020px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media only screen and ${devices.desktop} {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
