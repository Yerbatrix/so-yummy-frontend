import {
  RecipeHeroContainer,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from "./RecipePageHero.styled";

import axios from "../../redux/axiosConfig";

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const RecipePageHero = ({ recipeObj }) => {
  const { title, description, time } = recipeObj;
  return (
    <RecipeHeroContainer>
      <RecipeHeroTitle>{title}</RecipeHeroTitle>
      <RecipeHeroText>{description}</RecipeHeroText>
      <CookingTime>
        <ClockIconStyled />
        <span>{time + `min`}</span>
      </CookingTime>
    </RecipeHeroContainer>
  );
};

export default RecipePageHero;
