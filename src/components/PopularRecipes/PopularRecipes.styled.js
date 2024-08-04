import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitlePopularRecipes = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #23262a;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularRecipesList = styled.ul`
  width: 343px;

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
    display: block;
  }
`;

export const PopularRecipesItem = styled(Link)`
  width: 343px;
  height: 98px;
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;

export const PopularRecipesImage = styled.img`
  width: 104px;
  height: 85px;
  margin-right: 12px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 102px;
  }

  @media screen and (min-width: 1440px) {
    width: 97px;
    margin-right: 11px;
  }
`;

export const PopularRecipesSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.29;
  letter-spacing: -0.24px;
  color: #23262a;
  width: 212px;
  margin-bottom: 3px;
`;

export const PopularRecipesText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #7e7e7e;

  width: 212px;
  height: 50px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 208px;
  }

  @media screen and (min-width: 1440px) {
    width: 196px;
  }
`;

export const PopularRecipesNotFound = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #23262a;
`;
