import styled from "styled-components";

export const NotFoundContainer = styled.div`
  padding-bottom: 100px;
  padding-top: 40px @media screen and (min-width: 768px) {
    padding-bottom: 204px;
    padding-top: 60px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 203px;
    padding-top: 98px;
  }
`;

export const TextBox = styled.div`
  width: 206px;
  text-align: center;
  margin: 0 auto;
  margin-top: 14px;
  gap: 8px;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 24px;
      mergin-bottom: 14px;
    }
  }
  p {
    font-size: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #000000;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 428px;
  }
`;

export const ImgContainer = styled.div`
  width: 259px;
  height: 171px;
  margin: 0 auto;
  @media screen and *min-width: {
    width: 498px;
    height: 327px;
  }
  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 331px;
  }
`;
