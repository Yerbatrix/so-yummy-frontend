import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Section
        title="Breakfast"
        images={breakfastImages}
        category="breakfast"
      />
      <Section
        title="Miscellaneous"
        images={miscellaneousImages}
        category="miscellaneous"
      />
      <Section title="Chicken" images={chickenImages} category="chicken" />
      <Section title="Desserts" images={dessertsImages} category="desserts" />
    </>
  );
};

const HeroSection = () => {
  return (
    <Box
      height="800px"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      maxWidth="1440px"
      mx="auto"
      zIndex={1}
      position="relative"
    >
      {/* Left Section */}
      <Flex
        direction="column"
        align="left"
        width={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
        p={4}
        zIndex={1}
      >
        <Heading
          as="h1"
          size="2xl"
          mb={4}
          sx={{
            fontSize: "100px",
            fontWeight: 400,
            lineHeight: "100px",
            letterSpacing: "-0.005em",
          }}
        >
          <Text as="span" color="hsla(76, 52%, 44%, 1)">
            So
          </Text>
          Yummy
        </Heading>
        <Text fontSize="xl" mb={4}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="left"
          justify="left"
          mt={4}
        >
          <Input
            placeholder="Search..."
            size="lg"
            mr={{ base: 0, md: 0 }}
            mb={{ base: 2, md: 0 }}
            width={{ base: "100%", md: "auto" }}
          />
          <Button colorScheme="teal" size="lg">
            Search
          </Button>
        </Flex>
      </Flex>

      {/* Right Section */}
      <Flex
        position="relative"
        direction="column"
        align="center"
        justify="center"
        width={{ base: "100%", md: "50%" }}
        height={{ base: "300px", md: "auto" }}
      >
        {/* Background layer */}
        <Box
          position="absolute"
          width="941px"
          height="912px"
          top="-628px"
          left="auto"
          backgroundColor="hsla(75, 56%, 89%, 1)"
          transform="rotate(10.57deg)"
          zIndex={-3}
          borderRadius="60px"
          display={{ base: "block", md: "block" }}
        />

        {/* Image layer */}
        <Box
          position="absolute"
          width="578px"
          height="539px"
          top="-200px"
          left="auto"
          right="0"
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
          width="876px"
          height="944px"
          top="-486px"
          left="-87px"
          zIndex={-2}
          display={{ base: "block", md: "block" }}
        >
          <Image
            src="/public/images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-5abcc32f2ee473 1.png"
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
  return (
    <Box p={8} width="100%" overflow="hidden">
      <Box maxWidth="1440px" mx="auto">
        <Heading as="h2" size="xl" mb={4}>
          {title}
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4}
        >
          {images.map((image, index) => (
            <Box key={index} position="relative" width="100%" mb={4}>
              <Link as={RouterLink} to={image.link}>
                <Image
                  src={image.src}
                  alt={image.alt}
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
            to={`/categories/${title.toLowerCase()}`}
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

const breakfastImages = [
  {
    src: "/images/assorted-sliced-fruits-in-white-ceramic-bowl-1092730 1.jpg",
    alt: "Breakfast Item 1",
    name: "Pancakes",
    link: "/pancakes",
  },
  {
    src: "/images/M6A1135.jpg",
    alt: "Breakfast Item 2",
    name: "Waffles",
    link: "/pancakes",
  },
  {
    src: "/images/Spinach_quinoa_patties_01.jpg",
    alt: "Breakfast Item 3",
    name: "Omelette",
    link: "/pancakes",
  },
  {
    src: "/images/Spinach_quinoa_patties_01 (1).jpg",
    alt: "Breakfast Item 4",
    name: "Smoothie",
    link: "/pancakes",
  },
];

const miscellaneousImages = [
  {
    src: "/images/m1.jpg",
    alt: "Miscellaneous Item 1",
    name: "Spring Rolls",
    link: "/pancakes",
  },
  {
    src: "/images/m2.jpg",
    alt: "Miscellaneous Item 2",
    name: "Samosas",
    link: "/pancakes",
  },
  {
    src: "/images/m3.jpg",
    alt: "Miscellaneous Item 3",
    name: "Bruschetta",
    link: "/pancakes",
  },
  {
    src: "/images/m4.jpg",
    alt: "Miscellaneous Item 4",
    name: "Guacamole",
    link: "/pancakes",
  },
];

const chickenImages = [
  {
    src: "/images/chicken1.jpg",
    alt: "Chicken Item 1",
    name: "Grilled Chicken",
    link: "/pancakes",
  },
  {
    src: "/images/chicken2.jpg",
    alt: "Chicken Item 2",
    name: "Chicken Curry",
    link: "/pancakes",
  },
  {
    src: "/images/chicken3.jpg",
    alt: "Chicken Item 3",
    name: "Chicken Salad",
    link: "/pancakes",
  },
  {
    src: "/images/chicken4.jpg",
    alt: "Chicken Item 4",
    name: "Chicken Wings",
    link: "/pancakes",
  },
];

const dessertsImages = [
  {
    src: "images/desert1.jpg",
    alt: "Dessert Item 1",
    name: "Chocolate Cake",
    link: "/pancakes",
  },
  {
    src: "images/desert2.jpg",
    alt: "Dessert Item 2",
    name: "Ice Cream",
    link: "/pancakes",
  },
  {
    src: "/images/desertr3.jpg",
    alt: "Dessert Item 3",
    name: "Cookies",
    link: "/pancakes",
  },
  {
    src: "/images/desert4.jpg",
    alt: "Dessert Item 4",
    name: "Brownies",
    link: "/pancakes",
  },
];

export default MainPage;
