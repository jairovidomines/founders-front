import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store/store";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import { router } from "../routers/routes";
import { RouterProvider } from "react-router";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
