import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../const/breakpoints";
import backgroundDesktop from "../../images/welcome/welcome-desktop.png";
import backgroundDesktop2x from "../../images/welcome/welcome-desktop@2x.png";
import backgroundDesktop3x from "../../images/welcome/welcome-desktop@3x.png";
import backgroundMobile from "../../images/welcome/welcome-mobile.png";
import backgroundMobile2x from "../../images/welcome/welcome-mobile@2x.png";
import backgroundMobile3x from "../../images/welcome/welcome-mobile@3x.png";
import backgroundTablet from "../../images/welcome/welcome-tablet.png";
import backgroundTablet2x from "../../images/welcome/welcome-tablet@2x.png";
import backgroundTablet3x from "../../images/welcome/welcome-tablet@3x.png";

export const Box = styled.section`
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundMobile2x});
  }
  @media (min-device-pixel-ratio: 3),
    (min-resolution: 268dpi),
    (min-resolution: 3dppx) {
    background-image: url(${backgroundMobile3x});
  }

  @media only screen and ${devices.tablet} {
    background-image: url(${backgroundTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundTablet2x});
    }
    @media (min-device-pixel-ratio: 3),
      (min-resolution: 268dpi),
      (min-resolution: 3dppx) {
      background-image: url(${backgroundTablet3x});
    }
  }

  @media only screen and ${devices.desktop} {
    background-image: url(${backgroundDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundDesktop2x});
    }
    @media (min-device-pixel-ratio: 3),
      (min-resolution: 268dpi),
      (min-resolution: 3dppx) {
      background-image: url(${backgroundDesktop3x});
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Logo = styled.img`
  width: 68px;
  height: 68px;
  overflow: hidden;
  border-radius: 12px;

  @media only screen and ${devices.tablet} {
    width: 68px;
    height: 68px;
    margin-bottom: 44px;
  }
`;
export const Title = styled.p`
  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin: 0 0 14px 0;

  @media only screen and ${devices.tablet} {
    font-size: 28px;
    letter-spacing: -0.56px;
  }
`;

export const Content = styled.p`
  color: #fafafa;
  max-width: 305px;
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin-bottom: 56px;

  @media only screen and ${devices.tablet} {
    max-width: 505px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    margin-bottom: 52px;
  }
`;
export const Register = styled(Link)`
  border: 1px solid #fafafa;
  font-family: "Poppins", sans-serif;
  padding: 22px 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #fafafa;
  border-radius: 24px 44px;

  &:is(:hover, :focus-visible) {
    background-color: #8baa36;
    transition: all 0.3s;
    transition-behavior: normal;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
  }

  @media only screen and ${devices.tablet} {
    padding: 22px 44px;
    margin-right: 18px;
    font-size: 16px;
  }
`;

export const SignIn = styled(Link)`
  border: 1px solid #fafafa;
  font-family: "Poppins", sans-serif;
  padding: 22px 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #fafafa;
  border-radius: 24px 44px;

  &:is(:hover, :focus-visible) {
    background-color: #8baa36;
    transition: all 0.3s;
    transition-behavior: normal;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
  }

  @media only screen and ${devices.tablet} {
    padding: 22px 44px;
    font-size: 16px;
  }
`;
