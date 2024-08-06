import { combineReducers } from "@reduxjs/toolkit";
import { categoriesReducer } from "../categories/slice";
import { ingredientsReducer } from "../ingredients/slice";
import { popularRecipesReducer } from "../poplarRecipes/slice";
import { addOwnRecipeReducer } from "../recipes/slice";
import { searchReducer } from "../search/slice";

import authReducer from "./authSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  addOwnRecipe: addOwnRecipeReducer,
  categories: categoriesReducer,
  popularRecipe: popularRecipesReducer,
  ingredients: ingredientsReducer,
  search: searchReducer
});

export default rootReducer;
