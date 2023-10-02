import { AnyAction } from "@reduxjs/toolkit";
import { types } from "../types/types";

export const uiOpenFormModal: AnyAction = {
  type: types.uiOpenFormModal,
  payload: {},
};

export const uiCloseFormModal: AnyAction = {
  type: types.uiCloseFormModal,
  payload: {},
};

export const uiToggleOpenformModal: AnyAction = {
  type: types.uiToggleOpenFormModal,
  payload: {},
};
