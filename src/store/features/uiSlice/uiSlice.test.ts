import { UiState } from "./types";
import {
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives a new state and the action setIsloading", () => {
    test("Then it should return a new state with the property isLoading set as true", () => {
      const initialUiState: UiState = {
        modal: { isError: false, isSucess: true, message: "" },
        isLoading: false,
      };

      const expectedUiState: UiState = {
        isLoading: true,
        modal: { isError: false, isSucess: true, message: "" },
      };

      const setIsloadingAction = setIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialUiState, setIsloadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a new state and the action unsetIsLoading", () => {
    test("Then it should return a new state with the property isLoading set as a false", () => {
      const initialUiState: UiState = {
        isLoading: true,
        modal: {
          isError: false,
          isSucess: true,
          message: "",
        },
      };

      const expectedUiState: UiState = {
        isLoading: false,
        modal: {
          isError: false,
          isSucess: true,
          message: "",
        },
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialUiState, unsetIsLoadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });
});
