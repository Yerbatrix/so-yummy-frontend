import React from "react";
import { RecipePageBtnStyle } from "./RecipePageBtn.styled";

const RecipePageBtn = ({ text, fn, type }) => {
  return (
    <RecipePageBtnStyle type={type} onClick={fn}>
      {text}
    </RecipePageBtnStyle>
  );
};

export default RecipePageBtn;
