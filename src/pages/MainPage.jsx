import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
// import React from "react";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Section title="Breakfast" images={breakfastImages} />
      <Section title="Miscellaneous" images={miscellaneousImages} />
      <Section title="Chicken" images={chickenImages} />
      <Section title="Desserts" images={dessertsImages} />
    </>
  );
};

const HeroSection = () => {
  return (
    <Box
      height="800px"
      display="flex"
      flexDirection={{ base: "column", md: "row" }} // Column on mobile, row on desktop/tablet
      alignItems="center"
      justifyContent="center"
      maxWidth="1440px"
      mx="auto"
      zIndex={1}
      position="relative"
      // overflow="hidden" // Ensure nothing overflows outside the container
    >
      {/* Left Section */}
      <Flex
        direction="column"
        align="left"
        // justify="center"
        width={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }} // Center text on mobile, left-align on larger screens
        p={4}
        zIndex={1}
      >
        <Heading as="h1" size="2xl" mb={4}>
          SoYummy
        </Heading>
        <Text fontSize="xl" mb={4}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack input and button on mobile, row on desktop
          align="left"
          justify="left"
          mt={4}
        >
          <Input
            placeholder="Search..."
            size="lg"
            mr={{ base: 0, md: 0 }} // Margin-right on larger screens
            mb={{ base: 2, md: 0 }} // Margin-bottom on mobile
            width={{ base: "100%", md: "auto" }} // Full width on mobile, auto on desktop
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
        // overflow="hidden" // Ensure content does not overflow outside the container
      >
        {/* Background layer */}
        <Box
          position="absolute"
          width="941px"
          height="912px"
          top="-628px"
          left="auto" // Center background layer
          // right="  0" // Adjust to be within the visible area
          backgroundColor="hsla(75, 56%, 89%, 1)"
          transform="rotate(10.57deg)"
          zIndex={-1} // Set to ensure it's behind the content
          borderRadius="60px"
          display={{ base: "none", md: "block" }} // Hide on mobile
        />

        {/* Image layer */}
        <Box
          position="absolute"
          width="578px"
          height="539px"
          top="-200px"
          left="auto" // Center image layer
          right="0" // Adjust to be within the visible area
          opacity="1"
          zIndex={3} // Ensure this is above the background layer
          display={{ base: "none", md: "block" }} // Hide on mobile
        >
          <Image
            src="/images/unsplash_IGfIGP5ONV0.png" // Ensure this path is correct
            alt="Decorative"
            width="100%"
            height="100%"
            objectFit="contain" // Adjust as needed, e.g., 'cover' or 'contain'
          />
        </Box>
        <Box
          position="absolute"
          width="876px"
          height="944px"
          top="-486px"
          left="-87px"
          // opacity="0" // Make sure this is visible; adjust as needed
          // transform="rotate(-65deg)"
          zIndex={1} // Ensure this is behind the other images and background
          display={{ base: "none", md: "block" }} // Hide on mobile
        >
          <Image
            src="/public/images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-5abcc32f2ee473 1.png" // Ensure this path is correct
            alt="Additional Decorative"
            width="100%"
            height="100%"
            objectFit="contain" // Adjust as needed, e.g., 'cover' or 'contain'
          />
        </Box>
      </Flex>
    </Box>
  );
};

const Section = ({ title, images }) => {
  return (
    <Box p={8} maxWidth="1440px" mx="auto">
      <Heading as="h2" size="xl" mb={4}>
        {title}
      </Heading>
      <Flex wrap="wrap" gap={4}>
        {images.map((image, index) => (
          <Box
            key={index}
            position="relative"
            width={{ base: "100%", md: "23%" }}
            mb={4}
          >
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
              bottom="0"
              left="0"
              width="100%"
              bg="rgba(255, 255, 255, 0.7)" // White background with some transparency
              color="black"
              p={2}
              textAlign="center"
            >
              {image.name}
            </Box>
          </Box>
        ))}
      </Flex>
      <Button mt={4} colorScheme="teal">
        See All
      </Button>
    </Box>
  );
};

// Dummy image data
const breakfastImages = [
  {
    src: "/public/images/assorted-sliced-fruits-in-white-ceramic-bowl-1092730 1.jpg",
    alt: "Breakfast Item 1",
    name: "Pancakes",
  },
  { src: "/images/breakfast2.jpg", alt: "Breakfast Item 2", name: "Waffles" },
  { src: "/images/breakfast3.jpg", alt: "Breakfast Item 3", name: "Omelette" },
  { src: "/images/breakfast4.jpg", alt: "Breakfast Item 4", name: "Smoothie" },
];

const miscellaneousImages = [
  {
    src: "/images/misc1.jpg",
    alt: "Miscellaneous Item 1",
    name: "Spring Rolls",
  },
  { src: "/images/misc2.jpg", alt: "Miscellaneous Item 2", name: "Samosas" },
  { src: "/images/misc3.jpg", alt: "Miscellaneous Item 3", name: "Bruschetta" },
  { src: "/images/misc4.jpg", alt: "Miscellaneous Item 4", name: "Guacamole" },
];

const chickenImages = [
  {
    src: "/images/chicken1.jpg",
    alt: "Chicken Item 1",
    name: "Grilled Chicken",
  },
  { src: "/images/chicken2.jpg", alt: "Chicken Item 2", name: "Chicken Curry" },
  { src: "/images/chicken3.jpg", alt: "Chicken Item 3", name: "Chicken Salad" },
  { src: "/images/chicken4.jpg", alt: "Chicken Item 4", name: "Chicken Wings" },
];

const dessertsImages = [
  {
    src: "/images/dessert1.jpg",
    alt: "Dessert Item 1",
    name: "Chocolate Cake",
  },
  { src: "/images/dessert2.jpg", alt: "Dessert Item 2", name: "Ice Cream" },
  { src: "/images/dessert3.jpg", alt: "Dessert Item 3", name: "Cookies" },
  { src: "/images/dessert4.jpg", alt: "Dessert Item 4", name: "Brownies" },
];

export default MainPage;
