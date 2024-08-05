import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Poppins', sans-serif",
        margin: 0,
        padding: 0,
      },
      // a: {
      //   color: "hsla(76, 52%, 44%, 1)",
      //   textDecoration: "none",
      // },
    },
  },
  //   components: {
  //     Button: {
  //       baseStyle: {
  //         borderRadius: "24px 44px",
  //       },
  //       variants: {
  //         solid: {
  //           bg: "green",
  //           color: "white",
  //           _hover: {
  //             bg: "darkgreen",
  //           },
  //         },
  //       },
  //     },
  //   },
});

export default theme;
