import { useDispatch } from "react-redux";
import placeholder from "../../images/ShoppingList/not-found.jpg";
import { deleteIngrFromShoppingList } from "../../redux/shoppingList/operations";
import {
  CloseButtom,
  TableNumber,
  TableNumberBox,
  TableProduct,
  TableProductBox,
  TableProductText,
  TableRemove,
  TableRow,
} from "./ShoppingList.styled";

export const IngredientItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteIngrFromShoppingList(item._id));
  };

  return (
    <TableRow>
      <TableProduct>
        <TableProductBox>
          <img src={item.thb ? item.thb : placeholder} alt={item.ttl} />
        </TableProductBox>
        <TableProductText>{item.ttl}</TableProductText>
      </TableProduct>
      <TableNumber>
        <TableNumberBox>{item.measure}</TableNumberBox>
      </TableNumber>
      <TableRemove onClick={onClick}>
        <CloseButtom />
      </TableRemove>
    </TableRow>
  );
};
