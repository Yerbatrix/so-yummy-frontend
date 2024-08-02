import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const SigninPage = lazy(() => import("./pages/SigninPage"));
const MainPage = lazy(() => import("./pages/MainPage"));
const Categories = lazy(() => import("./pages/Categories"));
const AddRecipes = lazy(() => import("./pages/AddRecipes"));
const MyRecipes = lazy(() => import("./pages/MyRecipes"));
const Favorites = lazy(() => import("./pages/Favorites"));
const ShoppingList = lazy(() => import("./pages/ShoppingList"));
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WelcomePage />
              {/* <LogOut /> 
              <UserProfile /> */}
            </>
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
      </Routes>
    </Router>
  );
}

export default App;
