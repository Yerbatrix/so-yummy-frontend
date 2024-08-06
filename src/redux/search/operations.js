import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig";

export const getSearchByTitle = createAsyncThunk(
  "recipes/search",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("api/ingredients/");
      return data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearchByIngridients = createAsyncThunk(
  "ingredients",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("api/ingredients/");
      return data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
