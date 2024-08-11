import RecipeIngredientsItem from "../RecipeInngredientsItem/RecipeInngredientsItem";
import { IngredientsListStyled } from "./RecipeInngredientsList.styled";

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  console.log("Ingredients:", ingredients);

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
          recipeId={recipeId} // Przekazanie recipeId do każdego składnika
        />
      ))}
    </IngredientsListStyled>
  );
};

export default RecipeInngredientsList;
