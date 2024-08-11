import RecipeInngredientsItem from "../RecipeInngredientsItem/RecipeInngredientsItem";
import { IngredientsListStyled } from "./RecipeInngredientsList.styled";

const RecipeInngredientList = ({ ingredients }) => {
  return (
    <IngredientsListStyled>
      {ingredients.map((ingredient, index) => (
        <RecipeInngredientsItem
          key={`${ingredient.id._id}-${index}`}
          image={ingredient.id.thb}
          nameIngredient={ingredient.id.ttl}
          descriptionIngredient={ingredient.id.desc}
          weight={ingredient.measure ? ingredient.measure : "any"}
        />
      ))}
    </IngredientsListStyled>
  );
};

export default RecipeInngredientList;
