import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import IngredientsTitle from "../../components/IngredientsTitle/IngredientsTitle";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import { getShoppingList } from "../../redux/shoppingList/operations";
import {
  selectError,
  selectIsLoading,
} from "../../redux/shoppingList/selectors";
import {
  Container,
  Info,
  PageTitleText,
  SectionShoppingList,
  Wrap,
} from "./ShoppingListPage.styled";

const ShoppingListPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      dispatch(getShoppingList());
      isMountedRef.current = true;
    }
  }, [dispatch, isMountedRef]);

  return (
    <SectionShoppingList>
      <Container>
        <Wrap>
          <PageTitleText>Shopping list</PageTitleText>
        </Wrap>
        <Wrap>
          <IngredientsTitle title="Product" action="Remove" />
        </Wrap>
        {error && <Info>{error}</Info>}
        {!isLoading && <ShoppingList />}
      </Container>
    </SectionShoppingList>
  );
};

export default ShoppingListPage;
