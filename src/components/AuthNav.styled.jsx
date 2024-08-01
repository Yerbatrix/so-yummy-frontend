import styled from "styled-components";

export const Box = styled.div`
  background-image: url("/images/welcomeDesktop.jpg");
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 35px;
   @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .background-image {
      background-image: linear-gradient(
          rgba(46, 47, 66, 0.7),
          rgba(46, 47, 66, 0.7)
        ),
        url("/images/welcomeDesktopx2.jpg");
    }
  }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  margin: 0 auto;
`;
export const ImageLogo = styled.img`
  width: 68px;
  height: 68px;
  overflow: hidden;
  border-radius: 12px;
`;
export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 14px;
  width: 544px;
  height: 121px;
`;
export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #fafafa;
`;
export const Content = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  margin-top: 44px;
  width: 344px;
  height: 67px;
`;
export const Link = styled.a`
  border: 1px solid #fafafa;
  font-family: "Poppins", sans-serif;
  padding: 22px 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #fafafa;
  border-radius: 24px 44px;
  &:hover {
    background-color: #8baa36;
    transition: all 0.3s;
    transition-behavior: normal;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
  }
`;
