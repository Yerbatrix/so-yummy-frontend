import RecipeInngredientsItem from "../RecipeInngredientsItem/RecipeInngredientsItem";

import { IngredientsListStyled } from "./RecipeInngredientsList.styled";

const RecipeInngredientList = ({ ingredients }) => {
  return (
    <IngredientsListStyled>
      {ingredients.map((ingredient) => (
        <RecipeInngredientsItem
          key={ingredient.id._id}
          image={ingredient.id.thb}
          nameIngredient={ingredient.id.ttl}
          descriptionIngredient={ingredient.desc}
          weight={ingredient.measure ? ingredient.measure : "any"}
        />
      ))}
    </IngredientsListStyled>
  );
};

export default RecipeInngredientList;
