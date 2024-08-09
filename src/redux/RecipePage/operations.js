import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://t4-soyummy-api-2752d40c2586.herokuapp.com/";

const getRecipesById = createAsyncThunk(
  "recipes/getOneRecipe",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getRecipesById;
