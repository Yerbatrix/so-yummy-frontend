import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import MainPage from "./pages/MainPage";
import Categories from "./pages/Categories";
import AddRecipes from "./pages/AddRecipes";
import MyRecipes from "./pages/MyRecipes";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router basename="/so-yummy-frontend">
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
      </Routes>
    </Router>
  );
}

export default App;
