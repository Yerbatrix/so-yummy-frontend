import styled from "styled-components";

export const MainPageTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #001833;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const Container = styled.div`
  padding: 0 16px;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    padding: 0 100px;
  }
`;
