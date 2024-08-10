import { useSelector } from "react-redux";
import { selectShoppingList } from "../../redux/shoppingList/selectors";
import {
  Blocks,
  EmptyList,
  Table,
  TableHead,
  TableHeadNumber,
  TableHeadProduct,
  TableHeadRemove,
} from "./ShoppingList.styled";

export const ShoppingList = () => {
  const list = useSelector(selectShoppingList);

  return (
    <>
      <Table>
        <Blocks>
          <TableHead>
            <TableHeadProduct>Product</TableHeadProduct>
            <TableHeadNumber>Number</TableHeadNumber>
            <TableHeadRemove>Remove</TableHeadRemove>
          </TableHead>
          {list.map((item) => (
            <IngredientItem key={item._id} item={item} />
          ))}
        </Blocks>
      </Table>
      {list.length === 0 && (
        <EmptyList>Sorry, you haven't added any ingredients yet</EmptyList>
      )}
    </>
  );
};

export default ShoppingList;
