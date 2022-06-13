import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { QueryClientProvider, QueryClient, Query } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";
import PersistWrapper from "next-persist/lib/NextPersistWrapper";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const npConfig = {
  method: "localStorage",
  allowList: {
    menu: ["isMenuHide"],
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistWrapper wrapperConfig={npConfig}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistWrapper>
    </Provider>
  );
}

export default MyApp;
