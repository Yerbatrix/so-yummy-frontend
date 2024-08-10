import { useEffect, useState } from "react";
import { ShoppingList } from "../../components/ShoppingList/ShoppingList";
import { getShoppingList } from "../../redux/shoppingList/operations";
import { Container, MainPageTitle } from "./ShoppingListPage.styled";

const ShoppingListPage = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShoppingList(); // Zdobądź dane z operacji
        console.log(data);
        setShoppingList(data.data);
      } catch (error) {
        console.error("Failed to fetch shopping list:", error);
      }
    };

    fetchData(); // Wywołaj funkcję async wewnątrz useEffect
  }, []);

  return (
    <Container>
      <MainPageTitle>Shopping List</MainPageTitle>
      <ShoppingList shoppingList={shoppingList} />
    </Container>
  );
};

export default ShoppingListPage;
