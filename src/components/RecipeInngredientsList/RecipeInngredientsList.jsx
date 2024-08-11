import RecipeIngredientsItem from "../RecipeInngredientsItem/RecipeInngredientsItem";
import { IngredientsListStyled } from "./RecipeInngredientsList.styled";

const RecipeInngredientsList = ({ ingredients, recipeId, shoppingList }) => {
  const checkIfIngredientInShoppingList = (ingredientId) => {
    return shoppingList.some((item) => item.id === ingredientId);
  };

  return (
    <IngredientsListStyled>
      {ingredients.map((ingredient) => (
        <RecipeIngredientsItem
          key={ingredient.id}
          image={ingredient.thb}
          nameIngredient={ingredient.ttl || "No name available"}
          descriptionIngredient={ingredient.desc || ""}
          weight={ingredient.measure || "any"}
          ingredientId={ingredient.id}
          recipeId={recipeId}
          isChecked={checkIfIngredientInShoppingList(ingredient.id)} // Sprawdzenie, czy składnik jest na liście
        />
      ))}
    </IngredientsListStyled>
  );
};

export default RecipeInngredientsList;
