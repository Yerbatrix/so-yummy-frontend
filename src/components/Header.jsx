import { Box, Flex, Heading, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" justify="space-between">
        <Heading color="white">So Yummy</Heading>
        <Box>
          {!isAuthenticated ? (
            <>
              <Link as={RouterLink} to="/register" color="white" mr={4}>
                Register
              </Link>
              <Link as={RouterLink} to="/signin" color="white">
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link as={RouterLink} to="/main" color="white" mr={4}>
                Main
              </Link>
              <Link as={RouterLink} to="/categories" color="white" mr={4}>
                Categories
              </Link>
              <Link as={RouterLink} to="/add" color="white" mr={4}>
                Add Recipes
              </Link>
              <Link as={RouterLink} to="/my" color="white" mr={4}>
                My Recipes
              </Link>
              <Link as={RouterLink} to="/favorites" color="white" mr={4}>
                Favorites
              </Link>
              <Link as={RouterLink} to="/shopping-list" color="white" mr={4}>
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
