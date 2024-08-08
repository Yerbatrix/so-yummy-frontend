import { useEffect, useRef, useState } from "react";
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
  const dispatch = useDispatch();
  const ingredientsList = useSelector(selectIngredientsList);
  const [filteredIngredients, setFilteredIngredients] =
    useState(ingredientsList);
  const [ingrIsActive, setIngrIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [unitIsActive, setUnitIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );
  const listRefs = useRef([]);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  useEffect(() => {
    setFilteredIngredients(ingredientsList);
  }, [ingredientsList]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        listRefs.current &&
        !listRefs.current.some((ref) => ref && ref.contains(event.target))
      ) {
        setIngrIsActive(new Array(ingredients.length).fill(false));
        setUnitIsActive(new Array(ingredients.length).fill(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ingredients.length]);

  const incrementCount = () => {
    incrementIngrList();
  };

  const decrementCount = () => {
    decrementIngrList();
  };

  const deleteItem = (itemId, index) => {
    deleteIngr(itemId);
  };

  const setUnit = (index, value) => {
    updateIngr(index, "unitValue", value);
    toggleUnit(index);
  };

  const unitNumberChange = (index, value) => {
    updateIngr(index, "unitNumber", value);
    updateErrors(`ingredients[${index}].unitNumber`);
  };

  const onInputChange = (index, value, id) => {
    setFilteredIngredients(
      ingredientsList.filter(
        (ttl) =>
          ttl && ttl.ttl && ttl.ttl.toLowerCase().includes(value.toLowerCase())
      )
    );

    updateIngredient(index, value, id);
    updateErrors(`ingredients[${index}].name`);
  };

  const setIngredient = (index, value, id) => {
    updateIngredient(index, value, id);

    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const toggleIngredientList = (index) => {
    setIngrIsActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
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

  return (
    <IngrWrap>
      <IngrCountWrap>
        <IngrFormSubtitle>Ingredients</IngrFormSubtitle>
        <IngrCounter>
          <IngrMinusButton type="button" onClick={decrementCount}>
            <AiOutlineMinus />
          </IngrMinusButton>
          <IngrNumber>{ingredients.length}</IngrNumber>
          <IngrPlusButton type="button" onClick={incrementCount}>
            <AiOutlinePlus />
          </IngrPlusButton>
        </IngrCounter>
      </IngrCountWrap>
      <ul>
        {ingredients.map((item, index) => (
          <IngrItem key={item.id} ref={(el) => (listRefs.current[index] = el)}>
            <IngrInputWrap>
              <div>
                <IngrInput
                  autoFocus={true}
                  value={item.name}
                  onChange={(e) =>
                    onInputChange(index, e.target.value, item.id)
                  }
                  onFocus={() => toggleIngredientList(index)}
                />
                {errors[`ingredients[${index}].name`] && (
                  <IngrError>{errors[`ingredients[${index}].name`]}</IngrError>
                )}
                {ingrIsActive[index] && filteredIngredients.length > 0 && (
                  <IngrList>
                    {filteredIngredients.map((ingredient) => (
                      <IngrItem
                        key={ingredient._id}
                        onClick={() =>
                          setIngredient(index, ingredient.ttl, ingredient._id)
                        }
                      >
                        {ingredient.ttl}
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
                  <IngrSelectText>{item.unitValue}</IngrSelectText>
                  <IoIosArrowDown size="18" />
                </IngrUnitSelect>
                {unitIsActive[index] && (
                  <IngrUnitList>
                    {unitValues.map((unit) => (
                      <IngrUnitItem
                        key={unit}
                        onClick={() => setUnit(index, unit)}
                      >
                        {unit}
                      </IngrUnitItem>
                    ))}
                  </IngrUnitList>
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
        ))}
      </ul>
    </IngrWrap>
  );
};

export default RecipeIngredientsFields;
