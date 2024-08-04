import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/FollowUs/FollowUs";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";
import {
  AddRecipeContainer,
  AddRecipeSection,
  AddRecipeSideWrapper,
  AddRecipeTitle,
  AddRecipeWrapper,
} from "./AddRecipePage.styled";

const AddRecipePage = () => {
  return (
    <AddRecipeContainer>
      <AddRecipeSection>
        <AddRecipeTitle>Add recipe</AddRecipeTitle>
        <AddRecipeWrapper>
          <AddRecipeForm />
          <AddRecipeSideWrapper>
            <FollowUs />
            <PopularRecipes />
          </AddRecipeSideWrapper>
        </AddRecipeWrapper>
      </AddRecipeSection>
    </AddRecipeContainer>
  );
};

export default AddRecipePage;
