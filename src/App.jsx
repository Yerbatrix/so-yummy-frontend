import React, { useEffect } from "react";
import { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import SearchPage from "./pages/SearchPage/SearchPage";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout"; // Importujemy Layout
import { fetchUserData, checkAuth } from "./redux/slices/authSlice";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(checkAuth());
    if (isAuthenticated) {
      dispatch(fetchUserData());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Router basename="/">
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Główna ścieżka */}
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/main" /> : <WelcomePage />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />

          {/* Strony wymagające autoryzacji */}
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

          {/* Obsługa nieznanych ścieżek z Layoutem */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFoundPage />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
