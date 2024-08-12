import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

export const addOwnRecipe = createAsyncThunk(
  "add/own-recipes",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("api/recipes/", credentials);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  "recipes/addFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.post(`/api/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "recipes/deleteFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkFavorite = createAsyncThunk(
  "recipes/checkFavorite",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/favorite/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
