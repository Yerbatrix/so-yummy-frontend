import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const AuthNav = () => (
  <Box>
    <Link as={RouterLink} to="/register">
      Register
    </Link>
    <Link as={RouterLink} to="/signin">
      Sign In Test PR
    </Link>
  </Box>
);

export default AuthNav;
