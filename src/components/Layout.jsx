import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <Box maxW="1440px" mx="auto">
    <Header />
    <Box p={4}>{children}</Box>
    <Footer />
  </Box>
);

export default Layout;
