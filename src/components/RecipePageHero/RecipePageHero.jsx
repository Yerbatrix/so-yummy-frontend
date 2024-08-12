import { useDispatch } from "react-redux";
import RecipePageBtn from "../RecipePageBtn/RecipePageBtn";
import { addToFavorite } from "../../redux/recipes/operations";
import {
  RecipeHeroContainer,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from "./RecipePageHero.styled";
import { useParams } from "react-router-dom"; // Import useParams to get recipeId from URL

const RecipePageHero = ({ recipeObj }) => {
  const { title, description, time } = recipeObj;
  const dispatch = useDispatch();
  const { recipeId } = useParams(); // Get recipeId from URL parameters

  const handleAddToFavorite = () => {
    if (recipeId) {
      dispatch(addToFavorite(recipeId)); // Use recipeId obtained from URL
    } else {
      console.error("Recipe ID is undefined. Unable to add to favorites.");
    }
  };

  return (
    <RecipeHeroContainer>
      <RecipeHeroTitle>{title}</RecipeHeroTitle>
      <RecipeHeroText>{description}</RecipeHeroText>
      <RecipePageBtn
        type="button"
        text="Add to favorite recipes"
        fn={handleAddToFavorite}
      />
      <CookingTime>
        <ClockIconStyled />
        <span>{time + `min`}</span>
      </CookingTime>
    </RecipeHeroContainer>
  );
};

export default RecipePageHero;
