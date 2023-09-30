import { types } from "../types/types";
import { Action } from "../../types/types";

const initialState = {
  formModal: false,
};

export const uiReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.uiOpenFormModal:
      return {
        ...state,
        formModal: true,
      };
    case types.uiCloseFormModal:
      return {
        ...state,
        formModal: false,
      };
    default:
      return state;
  }
};
