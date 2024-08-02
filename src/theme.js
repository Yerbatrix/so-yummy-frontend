import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fontSizes: {
    lg: "18px",
  },
  colors: {
    green: {
      100: "#8BAA36",
    },
    black: {
      100: "#23262A",
    },
    white: {
      100: "#FAFAFA",
    },
    grey:{
        100:"#D9D9D9",
        200:"#C4C4C4"
    }
  },
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
  },
});

export default theme;
