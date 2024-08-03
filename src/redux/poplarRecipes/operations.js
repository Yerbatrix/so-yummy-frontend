import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularRecipes = createAsyncThunk(
  "recipes/getPopular",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/recipes/popular-recipes");
      return data.popularRecipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
