import { createSlice } from "@reduxjs/toolkit";
import axios from "../axiosConfig";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    checkAuth(state) {
      const token = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      } else {
        state.isAuthenticated = false;
        state.token = null;
      }
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    updateUser(state, action) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, logout, checkAuth, setUser, updateUser } =
  authSlice.actions;

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/auth/user");
    dispatch(setUser(response.data));
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
};

export default authSlice.reducer;
