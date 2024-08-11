import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "../../components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { HeaderTable, RecipeContainer } from "./RecipePage.styled";
import Loader from "../../components/Loader/Loader";

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getShoppingList } from "../../redux/shoppingList/operations";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getOneRecipe() {
      try {
        setIsLoading(true);
        const recipeResponse = await axios.get(`/api/recipes/${recipeId}`);
        setRecipeObj(recipeResponse.data);

        // Fetch shopping list ingredients
        const ingredientsResponse = await axios.get(
          `/api/recipes/${recipeId}/shopping-list`
        );
        setIngredients(ingredientsResponse.data);

        console.log("Loaded recipe:", recipeResponse.data);
        console.log("Loaded ingredients:", ingredientsResponse.data);
      } catch (error) {
        console.error("Error loading recipe:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getOneRecipe();
    dispatch(getShoppingList());
  }, [recipeId, dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <p> Whoops, something went wrong: {error.message}</p>;

  return (
    <>
      {recipeObj && (
        <>
          <RecipePageHero recipeObj={recipeObj} />
          <RecipeContainer>
            <HeaderTable>
              <p>Ingredients</p>
              <p>
                Number <span>Add to list</span>
              </p>
            </HeaderTable>
            <RecipeInngredientsList
              ingredients={ingredients}
              recipeId={recipeId}
            />
            <RecipePreparation
              image={recipeObj.thumb}
              instructions={recipeObj.instructions}
            />
          </RecipeContainer>
        </>
      )}
    </>
  );
};

export default RecipePage;
