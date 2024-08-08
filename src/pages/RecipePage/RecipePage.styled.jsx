import styled from "styled-components";

export const RecipeContainer = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    height: 58px;
    padding: 0 32px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 0 40px;
    margin-bottom: 50px;
  }
  p {
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  span {
    margin-left: 16px;
    @media screen and (min-width: 768px) {
      margin-left: 38px;
    }
    @media screen and (min-width: 1290px) {
      margin-left: 109px;
    }
  }
`;
