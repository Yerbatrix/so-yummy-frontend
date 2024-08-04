import { useState } from "react";
import {
  PrepError,
  PrepFormSubtitle,
  PrepRecipeText,
} from "./RecipePreparationFields.styled";

const RecipePreparationFields = ({ onPreparationSet, preparation, errors }) => {
  const [text, setText] = useState("");

  const handleKeyDown = (event) => {
    let arrayText = text;
    if (event.key === "Enter") {
      arrayText = text.split("\n").join(", ");
    }
    onPreparationSet(arrayText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <PrepFormSubtitle>Recipe Preparation</PrepFormSubtitle>
      <PrepRecipeText
        name="recipe"
        id="recipe"
        placeholder="Enter recipe"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={text}
      ></PrepRecipeText>
      {errors.preparation && <PrepError>{errors.preparation}</PrepError>}
    </>
  );
};

export default RecipePreparationFields;
