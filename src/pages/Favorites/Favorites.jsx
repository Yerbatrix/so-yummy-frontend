import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Favorites.css";
import deleteIconMobile from "../../images/deleteBttn/delete-bttn-mobile.png";
import deleteIconTablet from "../../images/deleteBttn/delete-bttn-tablet.png";
import deleteIconDesktop from "../../images/deleteBttn/delete-bttn-desktop.png";


const Favorites = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper. A classic Italian pasta dish with eggs, cheese, pancetta, and pepper",
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
    {
      id: 7,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 8,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 9,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 10,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 11,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 12,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 13,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 14,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 15,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 16,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 17,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 18,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 19,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 20,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 31,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 22,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 23,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 24,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 25,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 26,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 27,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 28,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
    {
      id: 29,
      title: "Lasagna",
      description: "Layered pasta with meat, cheese, and tomato sauce.",
      image: "https://via.placeholder.com/150",
      preparationTime: "1 hr 15 min",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const recipesPerPage = 4;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayRecipes = recipes
    .slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage)
    .map((recipe) => (
      <div key={recipe.id} className="recipe">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <div className="recipe-details">
          <h2>{recipe.title}</h2>
          <p className="recipe-description">{recipe.description}</p>
          <div className="timer-container">
            <p className="prep-time">{recipe.preparationTime}</p>
            <div className="recipe-actions">
              <button className="btn-see-fav">See recipe</button>
              <button className="btn-delete-fav">
              <picture>
                  <source media="(min-width: 1024px)" srcSet={deleteIconDesktop} />
                  <source media="(min-width: 768px)" srcSet={deleteIconTablet} />
                  <img src={deleteIconMobile} alt="Delete" className="delete-icon" />
                </picture>
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(recipes.length / recipesPerPage);
  const pageRangeDisplayed = windowWidth < 768 ? 5 : 8;

  return (
    <div className="container">
      <div className="header">
        <h1>Favorites</h1>
      </div>
      <div className="recipes">{displayRecipes}</div>
      <div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={1}
        />
      </div>
    </div>
  );
};

export default Favorites;
