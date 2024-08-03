import { createSlice } from "@reduxjs/toolkit";
import { addOwnRecipe } from "./operations";

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const addOwnRecipeSlice = createSlice({
  name: "addOwnRecipe",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addOwnRecipe.pending, handlePending)
      .addCase(addOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes.push(action.payload);
      })
      .addCase(addOwnRecipe.rejected, handleRejected);
  },
});

export const addOwnRecipeReducer = addOwnRecipeSlice.reducer;
