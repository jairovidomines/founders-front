import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "./types";

export const initialState: UiState = {
  isLoading: false,
  modal: { isError: false, message: "", isSuccess: false },
  filter: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: true,
    }),

    unsetIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: false,
    }),

    openModal: (
      currentState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentState,
      modal: {
        isError: action.payload.isError,
        message: action.payload.message,
        isSuccess: action.payload.isSuccess,
      },
    }),

    closeModal: (currentState): UiState => ({
      ...currentState,
      modal: {
        message: initialState.modal.message,
        isError: false,
        isSuccess: false,
      },
    }),

    addFilter: (currentState, action: PayloadAction<string>): UiState => ({
      ...currentState,
      filter: action.payload,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  closeModal: closeModalActionCreator,
  openModal: openModalActionCreator,
  addFilter: addFilterActionCreator,
} = uiSlice.actions;
