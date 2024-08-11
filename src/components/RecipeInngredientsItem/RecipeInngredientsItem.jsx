import {
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeightIngredient,
  Checkbox,
  DescriptionIngredient,
} from "./RecipeInngredientsItem.styled";
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
  isChecked,
  ingredientId,
  recipeId, // Dodanie recipeId jako props
}) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    if (isChecked) {
      dispatch(deleteIngrFromShoppingList({ recipeId, ingredientId }));
    } else {
      dispatch(addIngredientToShoppingList({ recipeId, ingredientId }));
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
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </RecipeItemWrapper>
  );
};

export default RecipeIngredientsItem;
