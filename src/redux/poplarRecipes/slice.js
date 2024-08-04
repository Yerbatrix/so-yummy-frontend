import { createSlice } from "@reduxjs/toolkit";
import { getPopularRecipes } from "./operations";

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPopularRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(getPopularRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const popularRecipesReducer = recipesSlice.reducer;
