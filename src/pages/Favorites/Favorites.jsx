import React, { useState } from "react";
import "./Favorites.css";
import deleteIcon from "../../images/deleteBttn/delete-bttn-mobile.png";

const Favorites = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      image:
        "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
      preparationTime: "30 min",
    },
    {
      id: 2,
      title: "Chicken Alfredo",
      description:
        "Creamy Alfredo sauce with tender chicken pieces and fettuccine pasta.",
      image:
        "https://www.themealdb.com/images/media/meals/vtxyxv1483567157.jpg",
      preparationTime: "45 min",
    },
    {
      id: 3,
      title: "Caesar Salad",
      description:
        "Crisp romaine lettuce, Caesar dressing, croutons, and Parmesan cheese.",
      image:
        "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
      preparationTime: "20 min",
    },
    {
      id: 4,
      title: "Margherita Pizza",
      description:
        "Classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
      image:
        "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
      preparationTime: "1 hr",
    },
    {
      id: 5,
      title: "Taco Salad",
      description:
        "A delicious taco salad with ground beef, lettuce, cheese, and salsa.",
      image: "https://via.placeholder.com/150",
      preparationTime: "25 min",
    },
    {
      id: 6,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 4;

  // Calculate the recipes to display on the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <div className="test">
        <h1>Favorites</h1>
      </div>
      <div className="recipes">
        {currentRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
            <div className="recipe-details">
              <h2>{recipe.title}</h2>
              <p className="recipe-description">{recipe.description}</p>
              <div className="timer-container">
                <p className="prep-time">{recipe.preparationTime}</p>
                <div className="recipe-actions">
                  <button className="btn-see">See Reecipe</button>
                  <button className="btn-delete">
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      className="delete-icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className="page-link"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
