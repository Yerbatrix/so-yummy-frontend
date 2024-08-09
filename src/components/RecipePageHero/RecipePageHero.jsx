import React from "react";

import {
  RecipeHeroContainer,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from "./RecipePageHero.styled";

const RecipePageHero = ({ recipeObj }) => {
  const { title, description, time } = recipeObj;
  return (
    <RecipeHeroContainer>
      <RecipeHeroTitle>{title}</RecipeHeroTitle>
      <RecipeHeroText>{description}</RecipeHeroText>
      <CookingTime>
        <ClockIconStyled />
        <span>{time + `min`}</span>
      </CookingTime>
    </RecipeHeroContainer>
  );
};

export default RecipePageHero;
