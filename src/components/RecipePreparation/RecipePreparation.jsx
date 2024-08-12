import {
  PreparationWrapper,
  PrepWrapper,
  PrepTitle,
  PrepList,
  PrepText,
  PrepWrapperImg,
} from "./RecipePreparation.styled";

import { nanoid } from "nanoid";

const RecipePreparation = ({ image, instructions }) => {
  if (!instructions) {
    return <div>No instructions provided</div>;
  }

  const items = instructions
    .split("\r\n")
    .filter((elem) => {
      if (!elem) return false;
      if (!isNaN(elem)) return false;
      if (elem.toLowerCase().includes("step")) return false;
      return true;
    })
    .map((item, index) => {
      let slicedItem = item;
      for (let i = 0; i < 2; i++) {
        if (!isNaN(slicedItem[i]) || slicedItem[i] === ".") {
          slicedItem = slicedItem.slice(i + 1);
        }
      }
      return (
        <PrepText key={nanoid()} data-step={index + 1}>
          <p>{slicedItem}</p>
        </PrepText>
      );
    });

  return (
    <PreparationWrapper>
      <PrepWrapper>
        <PrepTitle>Recipe Preparation</PrepTitle>
        <PrepList>{items}</PrepList>
      </PrepWrapper>

      <PrepWrapperImg>
        <img src={image} alt="Preparation" />
      </PrepWrapperImg>
    </PreparationWrapper>
  );
};

export default RecipePreparation;
