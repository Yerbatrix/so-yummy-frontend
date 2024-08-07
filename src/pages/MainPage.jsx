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
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SearchBar from "../components/Search/SearchBar";

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
        height={{ base: "100vh", md: "auto" }}
        direction="column"
        align="left"
        justifyContent={{ base: "space-between", md: "center" }}
        width={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
        p={4}
        zIndex={1}
      >
        <box>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            sx={{
              fontSize: "5rem",
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
          <Text fontSize={{ base: "1rem", md: "1.5rem" }} mb={4}>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </Text>
        </box>
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
        height={{ base: "300px", md: "auto" }}
      >
        {/* Background layer */}
        <Box
          position="absolute"
          width="1241px"
          height="912px"
          top={{ base: "-308px", md: "-628px" }}
          left={{ base: "250px", md: "50px" }}
          backgroundColor="hsla(75, 56%, 89%, 1)"
          transform={{ base: "rotate(50deg)", md: "rotate(10.57deg)" }}
          zIndex="-5"
          borderRadius="60px"
          display={{ base: "block", md: "block" }}
        />
        <Box
          position="absolute"
          top={{ base: "-250px", md: "0px", lg: "0px" }}
          left={{ base: "200px", md: "100px", lg: "300px" }}
        >
          <Text
            fontSize="14px"
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
                {/* Arrow icon */}
              </Flex>
            </Flex>
          </Text>
        </Box>

        {/* Image layer */}
        <Box
          position="absolute"
          width={{ base: "220px", md: "578px" }}
          height="539px"
          top={{ base: "-450px", md: "-200px" }}
          left="auto"
          right={{ base: "130px", md: "0" }}
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
          width={{ base: "750px", md: "876px" }}
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
          width={{ base: "750px", md: "876px" }}
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
      s
    </Box>
  );
};

const Section = ({ title, images, category }) => {
  return (
    <Box p={8} width="100%" overflow="hidden" position="relative" zIndex="2">
      <Box maxWidth="1440px" mx="auto">
        <Heading as="h2" size="xl" mb={4}>
          {title}
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4,1fr)",
          }}
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
