import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <Box>
    <Header />
    <Box p={4}>{children}</Box>
    <Footer />
  </Box>
);

export default Layout;
