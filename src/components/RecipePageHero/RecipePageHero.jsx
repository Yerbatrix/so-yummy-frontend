import RecipePageBtn from "../RecipePageBtn/RecipePageBtn";

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

      <RecipePageBtn text="Add to favorite recipes" />
      <CookingTime>
        <ClockIconStyled />
        <span>{time + `min`}</span>
      </CookingTime>
    </RecipeHeroContainer>
  );
};

export default RecipePageHero;
