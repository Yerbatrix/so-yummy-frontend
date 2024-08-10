import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingList } from "../../components/ShoppingList/ShoppingList";
import { getShoppingList } from "../../redux/shoppingList/operations";
import {
  selectShoppingList,
  selectIsLoading,
  selectError,
} from "../../redux/shoppingList/selectors";
import { Container, MainPageTitle } from "./ShoppingListPage.styled";

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <MainPageTitle>Shopping List</MainPageTitle>
      <ShoppingList shoppingList={shoppingList} />
    </Container>
  );
};

export default ShoppingListPage;
