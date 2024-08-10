import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import SearchBar from "../components/Search/SearchBar";

const MainPage = () => {
  const [recipes, setRecipes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get(
          "https://t4-soyummy-api-2752d40c2586.herokuapp.com/api/recipes/"
        );
        const categorizedRecipes = data.reduce((acc, recipe) => {
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

        setRecipes(categorizedRecipes);
      } catch (error) {
        setError("Error fetching recipes.");
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const categories = ["breakfast", "miscellaneous", "chicken", "desserts"];

  return (
    <>
      <HeroSection />
      {categories.map((category) =>
        recipes[category] && recipes[category].length > 0 ? (
          <Section
            key={category}
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            images={recipes[category]}
            category={category}
          />
        ) : null
      )}
      <OtherImagesButton />
    </>
  );
};

const HeroSection = () => {
  return (
    <Box
      height="700px"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      maxWidth="1440px"
      mx="auto"
      zIndex={1}
      position="relative"
      // overflow="hidden"
    >
      {/* Left Section */}
      <Flex
        height={{ base: "100%", md: "auto" }}
        direction="column"
        align="left"
        justifyContent={{ base: "space-between", md: "center" }}
        width={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
        p={4}
        zIndex={1}
      >
        <Box>
          <Heading
            as="h1"
            mb={4}
            fontSize={{ base: "45px", md: "70px", lg: "80px" }}
            fontWeight="500"
          >
            <Text as="span" color="hsla(76, 52%, 44%, 1)">
              So
            </Text>
            Yummy
          </Heading>
          <Text fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }} mb={4}>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </Text>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="left"
          justify="left"
          mt={4}
        >
          <SearchBar />
        </Flex>
      </Flex>
      {/* Right Section */}
      <Flex
        position="relative"
        direction="column"
        align="center"
        justify="center"
        width={{ base: "100%", md: "50%" }}
        height={{ base: "100px", md: "auto" }}
      >
        {/* Background layer */}
        <Box
          position="absolute"
          width="1241px"
          height="912px"
          top={{ base: "-500px", md: "-628px" }}
          left={{ base: "150px", md: "50px" }}
          backgroundColor="hsla(75, 56%, 89%, 1)"
          transform={{ base: "rotate(50deg)", md: "rotate(10.57deg)" }}
          zIndex="-5"
          borderRadius="60px"
          display={{ base: "block", md: "block" }}
        />
        <Box
          position="absolute"
          top={{ base: "-300px", md: "0px", lg: "0px" }}
          left={{ base: "70px", md: "100px", lg: "300px" }}
        >
          <Text
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight="500"
            backgroundColor="white"
            borderRadius="20px"
            p="20px"
            width="260px"
          >
            <Flex direction="column">
              <Box mb={2}>
                <Text as="span" color="hsla(76, 52%, 44%, 1)">
                  Delicious and healthy&nbsp;
                </Text>
                way to enjoy a variety of fresh ingredients in one satisfying
                meal
              </Box>
              <Flex align="center" justify="right">
                <Box mr="10px">
                  <Link as={RouterLink} to={`/my-recipes`}>
                    See recipes
                  </Link>
                </Box>
                <Icon as={ArrowForwardIcon} boxSize={5} color="gray.500" />{" "}
              </Flex>
            </Flex>
          </Text>
        </Box>

        {/* Image layer */}
        <Box
          position="absolute"
          width={{ base: "340px", md: "458px", lg: "578px" }}
          height="539px"
          top={{ base: "-510px", md: "-200px" }}
          left={{ base: "-10px", md: "auto" }}
          right={{ base: "70px", md: "0" }}
          opacity="1"
          zIndex={-1}
          display={{ base: "block", md: "block" }}
        >
          <Image
            src="/images/unsplash_IGfIGP5ONV0.png"
            alt="Decorative"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </Box>
        <Box
          position="absolute"
          width={{ base: "550px", md: "876px" }}
          height="944px"
          top={{ base: "-700px", md: "-486px" }}
          left={{ base: "-130px", md: "-87px" }}
          zIndex={-2}
          display={{ base: "block", md: "block" }}
        >
          <Image
            src="/images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-5abcc32f2ee473 1.png"
            alt="Additional Decorative"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </Box>
        <Box
          position="absolute"
          width={{ base: "10px", md: "876px" }}
          height="944px"
          top={{ base: "-700px", md: "-700px" }}
          left={{ base: "-130px", md: "-850px", lg: "-1150px" }}
          zIndex={-2}
          display={{ base: "block", md: "block" }}
          transform={{ base: "rotate(50deg)", md: "rotate(140.57deg)" }}
        >
          <Image
            src="/images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-5abcc32f2ee473 1.png"
            alt="Additional Decorative"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Box>
  );
};

const Section = ({ title, images, category }) => {
  // Use Chakra UI's useBreakpointValue hook to get the number of images based on screen size
  const displayCount = useBreakpointValue({
    base: 1, // mobile
    md: 2, // tablet
    lg: 4, // desktop
  });

  return (
    <Box p={8} width="100%" overflow="hidden" position="relative" zIndex="2">
      <Box maxWidth="1440px" mx="auto">
        <Heading as="h2" size="xl" mb={4}>
          {title}
        </Heading>
        <Grid
          templateColumns={{
            base: `repeat(${displayCount}, 1fr)`,
            md: `repeat(${displayCount}, 1fr)`,
            lg: `repeat(${displayCount}, 1fr)`,
          }}
          gap={4}
        >
          {images &&
            images.slice(0, displayCount).map((image, index) => (
              <Box key={index} position="relative" width="100%" mb={4}>
                <Link as={RouterLink} to={image.link}>
                  <Image
                    src={image.src}
                    alt={image.name}
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
                    borderRadius="10px"
                  >
                    {image.name}
                  </Box>
                </Link>
              </Box>
            ))}
        </Grid>
        <Box textAlign="right" mt={4}>
          <Button
            as={RouterLink}
            to={`/categories/${category}`}
            variant="solid"
            bg="hsla(76, 52%, 44%, 1)"
            color="white"
            size="lg"
            _hover={{ bg: "hsla(76, 52%, 54%, 1)" }}
          >
            See All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const OtherImagesButton = () => {
  return (
    <Box textAlign="center" mt={8} marginBottom="70px">
      <Button
        as={RouterLink}
        to={`/categories/beef`}
        bg="transparent"
        border="1px solid hsla(76, 52%, 54%, 1)"
        color="black"
        size="lg"
        _hover={{ bg: "hsla(76, 52%, 54%, 1)" }}
        borderRadius="24px 44px"
        width="300px"
      >
        Other images
      </Button>
    </Box>
  );
};

export default MainPage;
