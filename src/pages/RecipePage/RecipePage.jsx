import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "../../components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { HeaderTable, RecipeContainer } from "./RecipePage.styled";
import Loader from "../../components/Loader/Loader";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { recipeId } = useParams();

  useEffect(() => {
    async function getOneRecipe() {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/recipes/${recipeId}`);

        setRecipeObj(response.data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getOneRecipe();
  }, [recipeId]);

  return (
    <>
      {error && <p> Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}

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
            <RecipeInngredientsList ingredients={recipeObj.ingredients} />
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
