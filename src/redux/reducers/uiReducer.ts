import { RootState } from "../store/store";
import { types } from "../types/types";
import { AnyAction } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
};

export const uiReducer = (
  state: RootState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case types.uiOpenFormModal:
      return {
        ...state,
        isOpenModal: true,
      };
    case types.uiCloseFormModal:
      return {
        ...state,
        isOpenModal: false,
      };
    case types.uiToggleOpenFormModal:
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };
    default:
      return state;
  }
};
