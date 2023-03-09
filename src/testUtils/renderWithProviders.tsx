import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store/store";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return <Provider store={testStore}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
