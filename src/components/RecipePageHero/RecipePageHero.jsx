import { useState, useEffect } from "react";
import RecipePageBtn from "../RecipePageBtn/RecipePageBtn";
import { useSelector } from "react-redux";
import {
  checkFavorite,
  addToFavorite,
  deleteFavorite,
} from "../../redux/recipes/operations";
import { useDispatch } from "react-redux";
import {
  RecipeHeroContainer,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from "./RecipePageHero.styled";
import { useParams } from "react-router";

const RecipePageHero = ({ recipeObj, id }) => {
  const { title, description, time } = recipeObj;
  const dispatch = useDispatch();
  const [btnText, setBtnText] = useState(false);

  const data = useSelector((state) => state.favorites.items);
  // wiem ze tu selector jest undefined, ale nie wiem czym tu mozna by było go zastapic
  const { recipeId } = useParams();

  useEffect(() => {
    if (!data) {
      dispatch(checkFavorite());
    }
  }, [dispatch, data]);

  function removeFromFavorite() {
    dispatch(deleteFavorite(id));
    setBtnText(false);
    return;
  }

  function getFavorite(recipeId) {
    if (data) {
      const recipe = data.some((favorite) => favorite._id === recipeId);
      return recipe;
    }
    return false;
  }

  function addFavorite() {
    dispatch(addToFavorite(id));
    setBtnText(true);
    return;
  }

  return (
    <RecipeHeroContainer>
      <RecipeHeroTitle>{title}</RecipeHeroTitle>
      <RecipeHeroText>{description}</RecipeHeroText>
      {btnText || getFavorite(recipeId) ? (
        <RecipePageBtn
          type="button"
          text={"Remove from favorite recipes"}
          onClick={removeFromFavorite}
        />
      ) : (
        <RecipePageBtn
          type="button"
          text={"Add to favorite recipes"}
          onClick={addFavorite}
        />
      )}

      <CookingTime>
        <ClockIconStyled />
        <span>{time + `min`}</span>
      </CookingTime>
    </RecipeHeroContainer>
  );
};

export default RecipePageHero;
