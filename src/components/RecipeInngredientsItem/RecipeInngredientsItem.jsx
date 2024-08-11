import {
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeightIngredient,
  Checkbox,
  DescriptionIngredient,
} from "./RecipeInngredientsItem.styled";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addIngredientToShoppingList,
  deleteIngrFromShoppingList,
} from "../../redux/shoppingList/operations";
import Food from "../../images/RecipePage/food.svg";

const RecipeIngredientsItem = ({
  image,
  nameIngredient,
  descriptionIngredient,
  weight,
  ingredientId,
  isChecked,
  recipeId,
}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    if (!checked) {
      dispatch(addIngredientToShoppingList({ recipeId, ingredientId }));
      setChecked(true); // Zaznacz checkbox po dodaniu składnika
    }
  };

  return (
    <RecipeItemWrapper>
      <ImageWrapper>
        <img src={image || Food} alt={nameIngredient} />
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
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </RecipeItemWrapper>
  );
};

export default RecipeIngredientsItem;
