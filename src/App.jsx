import React, { useEffect } from "react"; // Dodanie brakującego importu useEffect
import { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "./redux/slices/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import AddRecipes from "./pages/AddRecipePage/AddRecipes";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites/Favorites";
import MainPage from "./pages/MainPage";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";
import SigninPage from "./pages/SignInPage/SigninPage";
import WelcomePage from "./pages/WelcomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Loader from "./components/Loader/Loader";

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/main" /> : <WelcomePage />
            }
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
              isAuthenticated ? (
                <PrivateRoute>
                  <RecipePage />
                </PrivateRoute>
              ) : (
                <Navigate to="/signin" />
              )
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
      </Suspense>
    </Router>
  );
}

export default App;
