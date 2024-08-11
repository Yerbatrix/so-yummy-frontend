import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

export const getShoppingList = createAsyncThunk(
  "shoppingList/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/shopping-list`);

      if (data && data.data && Array.isArray(data.data.results)) {
        return data.data.results.flatMap((list) => list.ingredients);
      } else {
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteIngrFromShoppingList = createAsyncThunk(
  "shoppingList/deleteIngredient",
  async (ingredientId, thunkAPI) => {
    try {
      const response = await axios.delete(`api/shopping-list/${ingredientId}`);

      if (response.status !== 200) {
        throw new Error("Failed to delete ingredient from the server");
      }

      return ingredientId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  "shoppingList/addIngredient",
  async ({ recipeId, ingredientId }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/recipes/${recipeId}/shopping-list`,
        { ingredientId }
      );

      return response.data.data.ingredients.find(
        (ingredient) => ingredient.id === ingredientId
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
