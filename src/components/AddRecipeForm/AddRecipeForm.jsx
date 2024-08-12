import { nanoid } from "nanoid";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOwnRecipe } from "../../redux/recipes/operations";
import { selectLoading } from "../../redux/recipes/selectors";
import {
  AddRecipeButton,
  AddRecipeFormStyles,
  AddRecipeSection,
} from "./AddRecipeForm.styled";
import addRecipeSchema from "./addRecipeSchema";
import RecipeDescriptionFields from "./RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields/RecipePreparationFields";

const AddRecipeForm = () => {
  const [category, setCategory] = useState("Breakfast");
  const [cookTime, setCookTime] = useState("30 min");
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), unitValue: "tbs", unitNumber: "", name: "" },
  ]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preparation, setPreparation] = useState("");
  const [errors, setErrors] = useState({});

  const updateErrors = (field) => {
    setErrors((prevState) => ({ ...prevState, [field]: "" }));
  };

  const onInputImageSet = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      updateErrors("image");
    } else {
      setImage(null);
    }
  };

  const onTitleChange = (value) => {
    setTitle(value);
    updateErrors("title");
  };

  const onDescriptionChange = (value) => {
    setDescription(value);
    updateErrors("description");
  };

  const onTimeSet = (value) => {
    setCookTime(value);
  };

  const onCategorySet = (value) => {
    setCategory(value);
  };

  const incrementIngredientsList = () => {
    setIngredients((prevState) => [
      ...prevState,
      { id: nanoid(), unitValue: "tbs", unitNumber: "", name: "" },
    ]);
  };

  const decrementIngredientsList = () => {
    const lastItem = ingredients[ingredients.length - 1];
    if (lastItem) {
      setIngredients((prevState) =>
        prevState.filter((item) => item.id !== lastItem.id)
      );
    }
  };

  const deleteIngredients = (itemId) => {
    setIngredients(ingredients.filter((item) => item.id !== itemId));
  };

  const updateIngredients = (index, unit, value) => {
    setIngredients((prevState) => {
      const newState = [...prevState];
      newState[index][unit] = value;
      return newState;
    });
  };

  const updateIngredient = (index, value, id) => {
    setIngredients((prevState) => {
      const newState = [...prevState];
      newState[index].name = value;
      newState[index].id = id;
      return newState;
    });
  };

  const onPreparationSet = (data) => {
    setPreparation(data);
    updateErrors("preparation");
  };

  const updatedIngredients = useMemo(
    () =>
      ingredients.map((ingredient) => {
        const { id, unitValue, unitNumber } = ingredient;
        const measure = `${unitNumber} ${unitValue}`;
        return { measure, id };
      }),
    [ingredients]
  );

  const initialValues = {
    image,
    title,
    description,
    cookTime,
    category,
    ingredients,
    preparation,
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoad = useSelector(selectLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (image) {
        formData.append("image", image);
      }

      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("time", cookTime);

      updatedIngredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}][id]`, ingredient.id);
        formData.append(`ingredients[${index}][measure]`, ingredient.measure);
      });

      formData.append("instructions", preparation);

      console.log("FormData content:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      await addRecipeSchema.validateAsync(initialValues, { abortEarly: false });
      await dispatch(addOwnRecipe(formData)).unwrap();
      navigate("/my-recipes", { replace: true });
    } catch (err) {
      if (err.isJoi) {
        const validationErrors = err.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      } else {
        console.error("Something went wrong... Please, try again", err);
        setErrors({ general: "Something went wrong... Please, try again" });
      }
    }
  };

  return (
    <AddRecipeSection>
      <AddRecipeFormStyles onSubmit={handleSubmit}>
        {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
        <RecipeDescriptionFields
          title={title}
          description={description}
          time={cookTime}
          category={category}
          onInputImageSet={onInputImageSet}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onTimeSet={onTimeSet}
          onCategorySet={onCategorySet}
          errors={errors}
        />
        <RecipeIngredientsFields
          ingredients={ingredients}
          incrementIngrList={incrementIngredientsList}
          decrementIngrList={decrementIngredientsList}
          deleteIngr={deleteIngredients}
          updateIngr={updateIngredients}
          updateIngredient={updateIngredient}
          errors={errors}
          updateErrors={updateErrors}
        />
        <RecipePreparationFields
          onPreparationSet={onPreparationSet}
          preparation={preparation}
          errors={errors}
        />
        <AddRecipeButton type="submit" disabled={isLoad}>
          {isLoad ? "Adding..." : "Add"}
        </AddRecipeButton>
      </AddRecipeFormStyles>
    </AddRecipeSection>
  );
};

export default AddRecipeForm;
