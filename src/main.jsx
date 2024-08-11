import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import theme from "./globalStyle";
import { checkAuth } from "./redux/slices/authSlice";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(checkAuth());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
