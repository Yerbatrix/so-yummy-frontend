import styled from "styled-components";

export const RecipeContainer = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  min-height: 150vh;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 490px) {
    padding: 0 10px;
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
  background-color: #8baa36;
  font-weight: 600;
  border-radius: 8px;

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

  @media screen and (max-width: 490px) {
    height: 50px;
    padding: 0 10px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  p {
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
    @media screen and (max-width: 490px) {
      font-size: 14px;
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
    @media screen and (max-width: 490px) {
      margin-left: 10px;
    }
  }
`;
