import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy } from "react";

import PrivateRoute from "./components/PrivateRoute";
import AddRecipes from "./pages/AddRecipePage/AddRecipes";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import MainPage from "./pages/MainPage";
import MyRecipes from "./pages/MyRecipes";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ShoppingList from "./pages/ShoppingList";
import SigninPage from "./pages/SignInPage/SigninPage";
import WelcomePage from "./pages/WelcomePage";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
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
          path="/categories"
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddRecipes />
            </PrivateRoute>
          }
        />
        <Route
          path="/my"
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
          path="/shopping-list"
          element={
            <PrivateRoute>
              <ShoppingList />
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
