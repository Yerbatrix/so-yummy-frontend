import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientsList } from "../../../redux/ingredients/operations";
import { selectIngredientsList } from "../../../redux/ingredients/selectors";
import {
  IngrCountWrap,
  IngrCounter,
  IngrDeleteButton,
  IngrError,
  IngrFormSubtitle,
  IngrInput,
  IngrInputWrap,
  IngrItem,
  IngrList,
  IngrMinusButton,
  IngrNumber,
  IngrNumberError,
  IngrNumberInput,
  IngrNumberLabel,
  IngrPlusButton,
  IngrSelectText,
  IngrUnitItem,
  IngrUnitList,
  IngrUnitSelect,
  IngrWrap,
} from "./RecipeIngredientsFields.styled";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

const RecipeIngredientsFields = ({
  ingredients,
  incrementIngrList,
  decrementIngrList,
  deleteIngr,
  updateIngr,
  updateIngredient,
  errors,
  updateErrors,
}) => {
  const unitValues = ["tbs", "tsp", "kg", "g"];
  const [count, setCount] = useState(1);
  const [unitIsActive, setUnitIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [ingrIsActive, setIngrIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );

  const dispatch = useDispatch();
  const ingredientsList = useSelector(selectIngredientsList);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  const [filteredIngredients, setFilteredIngredients] =
    useState(ingredientsList);

  const incrementCount = () => {
    incrementIngrList();
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    decrementIngrList();
    setCount((prevState) => prevState - 1);
  };

  const deleteItem = (itemId, index) => {
    deleteIngr(itemId);
    setCount((prevState) => prevState - 1);

    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const toggleUnit = (index) => {
    setUnitIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const setUnit = (index, value) => {
    setUnitIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    updateIngr(index, "unitValue", value);
  };

  const unitNumberChange = (index, value) => {
    updateIngr(index, "unitNumber", value);
    updateErrors([`ingredients[${index}].unitNumber`]);
  };

  const onInputChange = (index, value, id) => {
    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    setFilteredIngredients(
      ingredientsList.filter(
        (ttl) =>
          ttl && ttl.ttl && ttl.ttl.toLowerCase().includes(value.toLowerCase())
      )
    );

    updateIngredient(index, value, id);
    updateErrors([`ingredients[${index}].name`]);
  };

  const setIngredient = (index, value, id) => {
    updateIngredient(index, value, id);

    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <IngrWrap>
      <IngrCountWrap>
        <IngrFormSubtitle>Ingredients</IngrFormSubtitle>
        <IngrCounter>
          <IngrMinusButton type="button" onClick={decrementCount}>
            <AiOutlineMinus />
          </IngrMinusButton>
          <IngrNumber>{count}</IngrNumber>
          <IngrPlusButton type="button" onClick={incrementCount}>
            <AiOutlinePlus />
          </IngrPlusButton>
        </IngrCounter>
      </IngrCountWrap>
      <ul>
        {ingredients.map((item, index) => {
          return (
            <IngrItem key={item.id}>
              <IngrInputWrap>
                <div>
                  <IngrInput
                    autoFocus={true}
                    value={ingredients[index].name}
                    onChange={(e) => onInputChange(index, e.target.value)}
                  />
                  {errors[`ingredients[${index}].name`] && (
                    <IngrError>
                      {errors[`ingredients[${index}].name`]}
                    </IngrError>
                  )}
                  {ingrIsActive[index] && (
                    <IngrList>
                      {filteredIngredients.map((item) => (
                        <IngrItem
                          key={item._id}
                          onClick={() =>
                            setIngredient(index, item.ttl, item._id)
                          }
                        >
                          {item.ttl}
                        </IngrItem>
                      ))}
                    </IngrList>
                  )}
                </div>
                <IngrNumberLabel>
                  <IngrNumberInput
                    type="number"
                    value={item.unitNumber}
                    onChange={(e) => unitNumberChange(index, e.target.value)}
                  />
                  <IngrUnitSelect onClick={() => toggleUnit(index)}>
                    <IngrSelectText>
                      {ingredients[index].unitValue}
                    </IngrSelectText>
                    <IoIosArrowDown size="18" />
                  </IngrUnitSelect>
                  {unitIsActive[index] && (
                    <IngrUnitList>
                      {unitValues.map((item) => (
                        <IngrUnitItem
                          key={item}
                          onClick={() => setUnit(index, item)}
                        >
                          {item}
                        </IngrUnitItem>
                      ))}
                    </IngrUnitList>
                  )}
                  {errors[`ingredients[${index}].unitNumber`] && (
                    <IngrNumberError>
                      {errors[`ingredients[${index}].unitNumber`]}
                    </IngrNumberError>
                  )}
                </IngrNumberLabel>
              </IngrInputWrap>
              <IngrDeleteButton
                type="button"
                onClick={() => deleteItem(item.id, index)}
              >
                <VscChromeClose size="20px" />
              </IngrDeleteButton>
            </IngrItem>
          );
        })}
      </ul>
    </IngrWrap>
  );
};

export default RecipeIngredientsFields;
