import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      maxW="1440px"
      mx="auto"
      bg="transparent"
      p={4}
      zIndex={999}
      position="relative"
    >
      <Flex align="center" justify="space-between">
        <Heading color="hsla(214, 9%, 15%, 1)">So Yummy</Heading>
        <Box>
          {!isAuthenticated ? (
            <>
              <Link
                as={RouterLink}
                to="/register"
                color="hsla(214, 9%, 15%, 1)"
                mr={4}
              >
                Register
              </Link>
              <Link as={RouterLink} to="/signin" color="hsla(214, 9%, 15%, 1)">
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link
                as={RouterLink}
                to="/main"
                color="hsla(214, 9%, 15%, 1)"
                mr={4}
              >
                Main
              </Link>
              <Link
                as={RouterLink}
                to="/categories"
                color="hsla(214, 9%, 15%, 1)"
                mr={4}
              >
                Categories
              </Link>
              <Link
                as={RouterLink}
                to="/add"
                color="hsla(214, 9%, 15%, 1)"
                mr={4}
              >
                Add Recipes
              </Link>
              <Link
                as={RouterLink}
                to="/my"
                color="hsla(214, 9%, 15%, 1)"
                mr={4}
              >
                My Recipes
              </Link>
              <Link
                as={RouterLink}
                to="/favorites"
                color="hsla(214, 9%, 15%, 1)"
                mr={4}
              >
                Favorites
              </Link>
              <Link
                as={RouterLink}
                to="/shopping-list"
                color="hsla(214, 9%, 15%, 1)"
                mr={4}
              >
                Shopping List
              </Link>
              <Button
                onClick={handleLogout}
                colorScheme="teal"
                variant="outline"
                ml={4}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
