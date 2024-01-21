import { Product } from "../../components/Product/types";
import { AppDispatch } from "../store/store";
import { types } from "../types/types";

const POST_URL = "https://localhost:...";

const addProduct = (product: Product) => ({
  type: types.productAddNew,
  payload: {
    product,
  },
});

export const startAddProduct = (product: Product) => {
  async (dispatch: AppDispatch) => {
    const sendData = {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({
        name: product.name,
        id: product.id,
        qty: product.qty,
      }),
    };
    const response = await fetch(POST_URL, sendData);
    const data = await response.json();

    if (!data) {
    }

    dispatch(addProduct(product));
  };
};
