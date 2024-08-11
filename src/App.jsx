import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AddRecipes from "./pages/AddRecipePage/AddRecipes";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites/Favorites";
import MainPage from "./pages/MainPage";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";
import SigninPage from "./pages/SignInPage/SigninPage";
import WelcomePage from "./pages/WelcomePage";
import { checkAuth } from "./redux/slices/authSlice";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <Router basename="/">
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/main" /> : <WelcomePage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />

        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories/:category"
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-recipes"
          element={
            <PrivateRoute>
              <AddRecipes />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-recipes"
          element={
            <PrivateRoute>
              <MyRecipes />
            </PrivateRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path="recipes/:recipeId"
          element={
            <PrivateRoute>
              <RecipePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/shopping-list"
          element={
            <PrivateRoute>
              <ShoppingListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFoundPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
