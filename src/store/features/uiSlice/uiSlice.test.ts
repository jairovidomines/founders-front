import { ModalPayload, UiState } from "./types";
import {
  closeModalActionCreator,
  openModalActionCreator,
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

  describe("When it is called with an openModal action after showing a modal of success with text: 'Delete was successfull'", () => {
    test("Then it should hide the modal", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          isSucess: false,
          message: "Delete was successfull",
        },
      };

      const modalPayload: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: "Delete was successfull",
      };

      const expectedNewState: UiState = {
        isLoading: false,
        modal: {
          isError: false,
          isSucess: true,
          message: "Delete was successfull",
        },
      };

      const openModalAction = openModalActionCreator(modalPayload);
      const newUiState = uiReducer(uiInitialState, openModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it is called with a closeModal action after showing a modal for an error with text: 'Wrong credentials'", () => {
    test("Then it should hide the modal", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: { isError: true, isSucess: false, message: "Wrong credentials" },
      };

      const expectedNewState: UiState = {
        isLoading: false,
        modal: {
          isError: false,
          isSucess: false,
          message: "",
        },
      };

      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(uiInitialState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });
});
