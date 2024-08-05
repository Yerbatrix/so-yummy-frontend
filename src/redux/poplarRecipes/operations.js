import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig"; // Użyj axios z konfiguracyjnego pliku

export const getPopularRecipes = createAsyncThunk(
  "recipes/getPopular",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("api/recipes/popular-recipes/");
      return data.popularRecipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
