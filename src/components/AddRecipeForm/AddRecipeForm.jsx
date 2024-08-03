import { nanoid } from "nanoid";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOwnRecipe } from "../../redux/recipes/operations";
import { selectError, selectLoading } from "../../redux/recipes/selectors";
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
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preparation, setPreparation] = useState("");

  const [errors, setErrors] = useState({});
  const updateErrors = (value) => {
    setErrors((prevState) => ({ ...prevState, [value]: "" }));
  };

  const onInputImageSet = (event) => {
    setImage(event.target.files[0]);
    updateErrors("image");
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
    setIngredients((prevState) =>
      prevState.filter((item) => item.id !== lastItem.id)
    );
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
        return { measure: measure, id: id };
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

  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("time", cookTime);
  formData.append("ingredients", JSON.stringify(updatedIngredients));
  formData.append("instructions", preparation);

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoad = useSelector(selectLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipeSchema
      .validate(initialValues, { abortEarly: false })
      .then(() => {
        dispatch(addOwnRecipe(formData))
          .unwrap()
          .then(() => {
            navigate("/my", { replace: true });
            toast.success("Your recipe has been successfully added");
          })
          .catch((error) => {
            toast.error("Something went wrong... Please, try again");
          });
      })
      .catch((err) => {
        const errors = err.inner.reduce(
          (acc, curr) => ({ ...acc, [curr.path]: curr.message }),
          {}
        );
        setErrors(errors);
      });
  };

  return (
    <AddRecipeSection>
      <AddRecipeFormStyles onSubmit={handleSubmit}>
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
        <AddRecipeButton type="submit">Add</AddRecipeButton>
      </AddRecipeFormStyles>
    </AddRecipeSection>
  );
};

export default AddRecipeForm;
