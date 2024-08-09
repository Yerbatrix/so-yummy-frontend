import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "../../components/RecipeInngredientsList/RecipeInngredientList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { HeaderTable, RecipeContainer } from "./RecipePage.styled";
import Loader from "../../components/Loader/Loader";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

const getRecipesById = createAsyncThunk(
  "recipes/getOneRecipe",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { recipeId } = useParams();

  useEffect(() => {
    async function getOneRecipe() {
      try {
        setIsLoading(true);
        const { recipe } = await API.getRecipesById(recipeId);
        setRecipeObj(recipe);
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
