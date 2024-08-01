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
import { LogOut } from "./components/Modals/LogOut";
import { UserProfile } from "./components/Modals/UserProfile";

const basename = import.meta.env.DEV ? "/" : "/so-yummy-frontend/";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WelcomePage /> <LogOut /> <UserProfile />
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
