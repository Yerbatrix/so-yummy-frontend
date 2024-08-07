import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateShoppingList } from "../../redux/shoppingList/operations";
import { selectShoppingList } from "../../redux/shoppingList/selectors";

import EmptyPageDesktop from "../../images/ShoppingList/empty-page-dekstop.png";
import DefaultIngredientsImg from "../../images/ShoppingList/not-found.jpg";
import {
  Button,
  CloseIcon,
  Img,
  ImgEmptyPageThumb,
  IngedientsImgThumb,
  IngedientsItem,
  IngedientsMeasure,
  IngedientsTitle,
  Text,
  Wrap,
} from "./ShoppingList.styled";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);

  const handleDelete = (id, measure) => {
    const credentials = { measure: measure, ingredientId: id };
    dispatch(updateShoppingList(credentials));
  };

  const handleDeleteIngredient = (id, measure) => {
    handleDelete(id, measure);
  };

  return (
    <>
      {shoppingList.length !== 0 ? (
        <ul>
          {shoppingList.map(({ _id, ttl, image, measure }) => {
            return (
              <IngedientsItem key={_id}>
                <Wrap>
                  <IngedientsImgThumb>
                    <Img
                      src={image ? image : DefaultIngredientsImg}
                      alt="Ingredient"
                    />
                  </IngedientsImgThumb>
                  <IngedientsTitle>{ttl}</IngedientsTitle>{" "}
                </Wrap>
                <Wrap>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <Button
                    type="button"
                    onClick={() => handleDeleteIngredient(_id, measure)}
                  >
                    <CloseIcon />
                  </Button>
                </Wrap>
              </IngedientsItem>
            );
          })}
        </ul>
      ) : (
        <>
          <ImgEmptyPageThumb>
            <Img src={EmptyPageDesktop} alt="Fruit Basket" />
          </ImgEmptyPageThumb>
          <Text>You don't have any products in your shopping list yet...</Text>
        </>
      )}
    </>
  );
};

export default ShoppingList;
