import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularRecipes } from "../../redux/poplarRecipes/operations";
import { selectPopularRecipes } from "../../redux/poplarRecipes/selectors";
import {
  PopularRecipesImage,
  PopularRecipesItem,
  PopularRecipesList,
  PopularRecipesNotFound,
  PopularRecipesSubtitle,
  PopularRecipesText,
  TitlePopularRecipes,
} from "./PopularRecipes.styled";

import photoRecipe from "../../images/AddRecipePage/small-photo-recipes.png";

const truncateText = (text, length) => {
  if (!text) return "";
  return text.length > length ? `${text.slice(0, length)}...` : text;
};

const PopularRecipes = () => {
  const dispatch = useDispatch();
  const popularRecipes = useSelector(selectPopularRecipes);

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  return (
    <div>
      <TitlePopularRecipes>Popular recipe</TitlePopularRecipes>
      {popularRecipes && popularRecipes.length > 0 ? (
        <PopularRecipesList>
          {popularRecipes.map((recipe) => (
            <PopularRecipesItem to={`/recipes/${recipe._id}`} key={recipe._id}>
              <PopularRecipesImage
                src={recipe.preview || photoRecipe}
                alt="dish"
              />
              <div>
                <PopularRecipesSubtitle>{recipe.title}</PopularRecipesSubtitle>
                <PopularRecipesText>
                  {truncateText(recipe.instructions, 110)}
                </PopularRecipesText>
              </div>
            </PopularRecipesItem>
          ))}
        </PopularRecipesList>
      ) : (
        <PopularRecipesNotFound>No popular recipes yet</PopularRecipesNotFound>
      )}
    </div>
  );
};

export default PopularRecipes;
