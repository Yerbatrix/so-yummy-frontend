import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import theme from "./globalStyle";
import store from "./redux/store";
import { checkAuth } from "./redux/slices/authSlice";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(checkAuth());

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
