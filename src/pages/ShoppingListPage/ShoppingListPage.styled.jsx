import styled from "styled-components";

export const SectionShoppingList = styled.section`
  padding-top: 114px;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-top: 136px;
    padding-bottom: 200px;
  }
  @media (min-width: 1440px) {
    padding-top: 164px;
    padding-bottom: 195px;
  }
`;

export const Wrap = styled.div`
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 72px;
  }
`;

export const Info = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => `${theme.colors.textSubTitle}`};
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 100px;
    width: 1440px;
  }
`;

export const PageTitleText = styled.h1`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.24px;

  color: #001833;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;
