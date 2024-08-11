import React, { useState, useEffect } from "react";
import axios from "../../redux/axiosConfig";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Loader/Loader";
import "./MyRecipes.css";
import deleteIconMobile from "../../images/deleteBttn/delete-bttn-mobile-my.png";
import deleteIconTablet from "../../images/deleteBttn/delete-bttn-tablet-my.png";
import deleteIconDesktop from "../../images/deleteBttn/delete-bttn-desktop-my.png";
import sadFace from "../../images/sadFace/sad-face.jpg";
import noImage from "../../images/noImage/no-image.png";

const MyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const recipesPerPage = 4;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/recipes/ownRecipes");
        if (response.data && Array.isArray(response.data)) {
          setMyRecipes(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching the recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/recipes/${id}`);
      setMyRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe._id !== id)
      );
    } catch (error) {
      console.error("Error deleting the recipe:", error);
    }
  };

  const handleSeeRecipe = (id) => {
    window.location.href = `https://soyummy-t4.netlify.app/recipes/${id}`;
  };

  const displayRecipes = myRecipes
    .slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage)
    .map((recipe) => {
      const fullThumbUrl = recipe.thumb
        ? `https://t4-soyummy-api-2752d40c2586.herokuapp.com/${recipe.thumb}`
        : noImage;

      return (
        <div key={recipe._id} className="recipe">
          <img
            crossOrigin="anonymous"
            src={fullThumbUrl}
            alt={recipe.title}
            className="recipe-image"
          />
          <div className="recipe-details">
            <h2>{recipe.title}</h2>
            <p className="recipe-description">{recipe.description}</p>
            <div className="timer-container">
              <p className="prep-time">{recipe.time} min</p>
              <div className="recipe-actions">
                <button
                  className="btn-see"
                  onClick={() => handleSeeRecipe(recipe._id)}
                >
                  See recipe
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(recipe._id)}
                >
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={deleteIconDesktop}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={deleteIconTablet}
                    />
                    <img
                      src={deleteIconMobile}
                      alt="Delete"
                      className="delete-icon"
                    />
                  </picture>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(myRecipes.length / recipesPerPage);
  const pageRangeDisplayed = windowWidth < 768 ? 5 : 8;

  return (
    <div className="container">
      <div className="header">
        <h1>My Recipes</h1>
      </div>
      {loading ? (
        <div className="loading-container">
          <Loader />
        </div>
      ) : myRecipes.length === 0 ? (
        <div className="no-recipes">
          <img src={sadFace} alt="Sad face" className="sad-face-image" />
          <p>You have no recipes added.</p>
        </div>
      ) : (
        <>
          <div className="recipes">{displayRecipes}</div>
          {myRecipes.length > recipesPerPage && (
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
          )}
        </>
      )}
    </div>
  );
};

export default MyRecipes;
