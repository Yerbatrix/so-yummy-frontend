import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const setHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const register = createAsyncThunk(
  "AUTH/REGISTER",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/register", credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      console.log(error);
      if (error.message === "Request failed with status code 409") {
        toast.error("This email address is already registered", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      if (error.message === "Request failed with status code 400") {
        toast.error("Incorrect name, email or password", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export default register;
