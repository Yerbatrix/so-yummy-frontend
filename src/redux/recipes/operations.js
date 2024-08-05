import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axiosConfig";

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
