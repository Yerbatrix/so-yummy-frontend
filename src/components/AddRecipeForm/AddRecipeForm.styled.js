import styled from "styled-components";

export const AddRecipeSection = styled.section`
  padding-bottom: 72px;
  j @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
`;

export const AddRecipeTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: #001833;
  margin-top: 30px;
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    font-size: 32px;
  }
`;

export const AddRecipeFormStyles = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddRecipeButton = styled.button`
  width: 129px;
  height: 46px;
  border-radius: 24px 44px;
  border: none;
  background-color: #22252a;
  color: #fafafa;
  font-size: 16px;
  line-height: 1.43;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 52px;
  }
`;
