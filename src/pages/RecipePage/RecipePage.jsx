import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingList } from "../../redux/shoppingList/operations";
import { selectShoppingList } from "../../redux/shoppingList/selectors";
import RecipePageHero from "../../components/RecipePageHero/RecipePageHero";
import RecipeInngredientsList from "../../components/RecipeInngredientsList/RecipeInngredientsList";
import RecipePreparation from "../../components/RecipePreparation/RecipePreparation";
import { HeaderTable, RecipeContainer } from "./RecipePage.styled";
import Loader from "../../components/Loader/Loader";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const shoppingList = useSelector(selectShoppingList); // Pobieranie listy zakupów z Redux
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getOneRecipe() {
      try {
        setIsLoading(true);
        const recipeResponse = await axios.get(`/api/recipes/${recipeId}`);
        setRecipeObj(recipeResponse.data);

        const ingredientsResponse = await axios.get(
          `/api/recipes/${recipeId}/shopping-list`
        );
        setIngredients(ingredientsResponse.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getOneRecipe();
    dispatch(getShoppingList()); // Pobieranie listy zakupów
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
              shoppingList={shoppingList} // Przekazanie listy zakupów
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
