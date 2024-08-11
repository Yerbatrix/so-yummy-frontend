import {
  Alert,
  AlertIcon,
  Box,
  Grid,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { startTransition, useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "beef");
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    "beef",
    "breakfast",
    "chicken",
    "dessert",
    "goat",
    "lamb",
    "miscellaneous",
    "pasta",
    "pork",
    "seafood",
    "side",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://t4-soyummy-api-2752d40c2586.herokuapp.com/api/recipes/"
        );
        const categorizedProducts = data.reduce((acc, recipe) => {
          const category = recipe.category.toLowerCase();
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push({
            id: recipe._id,
            name: recipe.title,
            src: recipe.thumb,
            link: `/recipes/${recipe._id}`,
          });
          return acc;
        }, {});

        setProducts(categorizedProducts);
      } catch (error) {
        setError("Error fetching products.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    startTransition(() => {
      fetchProducts();
    });
  }, []);

  useEffect(() => {
    if (category) {
      startTransition(() => {
        setSelectedCategory(category);
      });
    }
  }, [category]);

  const handleCategoryClick = (category) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Categories
      </Text>
      <Box mb={4}>
        <Box display="flex" gap={2} mb={2} position="relative">
          {categories.map((category) => (
            <Link
              key={category}
              as={RouterLink}
              to={`/categories/${category}`}
              onClick={() => handleCategoryClick(category)}
              textDecoration="none"
              color={
                selectedCategory === category
                  ? "hsla(76, 52%, 44%, 1)"
                  : "hsla(76, 52%, 44%, 0.5)"
              }
              fontWeight={selectedCategory === category ? "bold" : "normal"}
              position="relative"
              p={2}
              _active={{
                textDecoration: "underline",
                backgroundColor: "transparent",
              }}
              _focus={{ boxShadow: "none", backgroundColor: "transparent" }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {selectedCategory === category && (
                <Box
                  position="absolute"
                  bottom="-2px"
                  left="0"
                  width="100%"
                  height="2px"
                  bg="hsla(76, 52%, 44%, 1)"
                  zIndex={1}
                />
              )}
            </Link>
          ))}
        </Box>
        <Box borderBottom="1px" borderColor="gray.200" mb={4} />
      </Box>
      {loading ? (
        <Box textAlign="center" mt={8}>
          <Spinner size="lg" />
        </Box>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          pt={6}
          pb={8}
        >
          {products[selectedCategory]?.slice(0, 8).map((product) => (
            <Box key={product.id} position="relative" width="100%">
              <RouterLink to={product.link}>
                <Image
                  src={product.src}
                  alt={product.name}
                  width="100%"
                  height="auto"
                  borderRadius="md"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  bottom="5"
                  left="7"
                  width="80%"
                  bg="white"
                  color="black"
                  p={2}
                  textAlign="center"
                  borderRadius="md"
                >
                  <Text fontWeight="bold">{product.name}</Text>
                </Box>
              </RouterLink>
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Categories;
