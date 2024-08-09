import {
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeightIngredient,
  Checkbox,
  DescriptionIngredient,
} from "./RecipeInngredientsItem.styled";

import Food from "../../images/RecipePage/food.svg";

const RecipeIngredientsItem = ({
  image,
  nameIngredient,
  descriptionIngredient,
  weight,
}) => {
  return (
    <RecipeItemWrapper>
      <ImageWrapper>
        {image !== " " ? (
          <img src={image} alt={nameIngredient} />
        ) : (
          <img src={Food} alt={nameIngredient} />
        )}
      </ImageWrapper>
      <TextContainer>
        <NameIngredient>
          {nameIngredient}
          {descriptionIngredient && (
            <DescriptionIngredient>
              {descriptionIngredient}
            </DescriptionIngredient>
          )}
        </NameIngredient>
      </TextContainer>

      <WeightIngredient>{weight}</WeightIngredient>
      <Checkbox
        type="checkbox"
        // onChange={}
        // checked={}
      />
    </RecipeItemWrapper>
  );
};

export default RecipeIngredientsItem;
