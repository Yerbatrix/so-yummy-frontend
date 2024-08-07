import {
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeighIngredient,
  Checkbox,
} from "./RecipeInngredientsItem.styled";

import Food from "../../images/RecipePage/food.svg";

const RecipeIngredientsItem = ({ image, nameIngredient, weight }) => {
  return (
    <RecipeItem>
      <RecipeItemWrapper>
        <ImageWrapper>
          <img src={image || Food} alt={nameIngredient} />
        </ImageWrapper>
        <TextContainer>
          <NameIngredient>{nameIngredient}</NameIngredient>
        </TextContainer>

        <WeighIngredient>{weight}</WeighIngredient>
        <Checkbox
          type="checkbox"
          // onChange={}
          // checked={}
        />
      </RecipeItemWrapper>
    </RecipeItem>
  );
};

export default RecipeIngredientsItem;
