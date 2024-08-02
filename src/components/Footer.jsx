import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box bg="hsla(218, 11%, 15%, 1)" color="white" py={8} width="100%">
        <Flex
          maxWidth="1440px"
          mx="auto"
          px={4}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          {/* Column 1 */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Flex
              align="center"
              mb={4}
              justify={{ base: "center", md: "flex-start" }}
            >
              <Icon as={MdEmail} boxSize={8} mr={2} />
              <Heading
                as="h2"
                size="lg"
                textAlign={{ base: "center", md: "left" }}
              >
                So Yummy
              </Heading>
            </Flex>
            <List
              spacing={2}
              textAlign={{ base: "center", md: "left" }}
              display={{ base: "none", md: "block" }}
              listStyleType="disc"
              ml={4}
            >
              <ListItem>Database of recipes that can be replenished </ListItem>
              <ListItem>
                Flexible search for desired and unwanted ingredients
              </ListItem>
              <ListItem>Ability to add your own recipes with photos</ListItem>
              <ListItem>Convenient and easy to use</ListItem>
            </List>
          </Box>

          {/* Column 2 */}
          <Box
            textAlign={{ base: "center", md: "left" }}
            mt={{ base: 8, md: 0 }}
          >
            <List spacing={2} mb={4}>
              <ListItem>
                <Link as={RouterLink} to="/ingredients">
                  Ingredients
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RouterLink} to="/add-recipes">
                  Add Recipes
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RouterLink} to="/my-recipes">
                  My Recipes
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RouterLink} to="/favorite">
                  Favorite
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RouterLink} to="/shopping-list">
                  Shopping List
                </Link>
              </ListItem>
            </List>
            <Flex justify="center" gap={4}>
              <Link href="https://www.facebook.com" isExternal mr={2}>
                <Icon
                  as={FaFacebook}
                  boxSize={6}
                  color="hsla(76, 52%, 44%, 1)"
                />
              </Link>
              <Link href="https://www.twitter.com" isExternal mr={2}>
                <Icon
                  as={FaTwitter}
                  boxSize={6}
                  color="hsla(76, 52%, 44%, 1)"
                />
              </Link>
              <Link href="https://www.youtube.com" isExternal mr={2}>
                <Icon
                  as={FaYoutube}
                  boxSize={6}
                  color="hsla(76, 52%, 44%, 1)"
                />
              </Link>
              <Link href="https://www.instagram.com" isExternal>
                <Icon
                  as={FaInstagram}
                  boxSize={6}
                  color="hsla(76, 52%, 44%, 1)"
                />
              </Link>
            </Flex>
          </Box>

          {/* Column 3 */}
          <Box
            maxW="339px"
            textAlign={{ base: "center", md: "left" }}
            mx={{ base: "auto", md: "0" }}
            mt={{ base: 8, md: 0 }}
          >
            <Heading
              as="h5"
              size="md"
              mb={4}
              display={{ base: "none", md: "block" }}
            >
              Subscribe to our newsletter
            </Heading>
            <Text mb={4} display={{ base: "none", md: "block" }}>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </Text>

            <InputGroup mb={4}>
              <InputLeftElement
                pointerEvents="none"
                children={<MdEmail color="gray.300" />}
              />
              <Input
                placeholder="Enter your email address"
                size="lg"
                type="email"
              />
            </InputGroup>
            <Button
              bg="hsla(76, 52%, 44%, 1)"
              color="white"
              size="lg"
              _hover={{ bg: "hsla(76, 52%, 54%, 1)" }}
            >
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box width="100%" bg="white" color="black" py={4} textAlign="center">
        <Text>© 2023 All Rights Reserved.</Text>
      </Box>
    </>
  );
};

export default Footer;
