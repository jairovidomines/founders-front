import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { RootState, store } from "../store/store";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";
import { userReducer } from "../store/features/userSlice/userSlice";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";

const rootReducer = combineReducers({ user: userReducer });

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({ reducer: rootReducer, preloadedState });
};

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={testStore}>
          <GlobalStyles />
          {children}
        </Provider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
