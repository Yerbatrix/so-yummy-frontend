import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

export const getPopularRecipes = createAsyncThunk(
  "recipes/getPopular",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("api/recipes/popular/");
      return data.popularRecipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
