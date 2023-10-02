import { useAppDispatch } from "../../hooks/hooks";
import { AppDispatch } from "../../redux/store/store";
import { uiOpenFormModal } from "../../redux/actions/uiActions";

const dispatch: AppDispatch = useAppDispatch();

export const handleOpenForm = () => {
  dispatch(uiOpenFormModal);
};
