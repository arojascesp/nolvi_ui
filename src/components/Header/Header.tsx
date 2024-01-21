import React from "react";
import { Disclosure } from "@headlessui/react";

import { AppDispatch } from "../../redux/store/store.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { uiOpenFormModal } from "../../redux/actions/uiActions.ts";

const Header = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const handleOpenForm = () => {
    dispatch(uiOpenFormModal);
  };
  return (
    <Disclosure
      as="nav"
      className="w-full flex bg-[#c4975c] shadow-md justify-between fixed top-0 z-50"
    >
      <header className="flex justify-center">
        <h1 className="m-1 text-[#da825f] font-bold leading-tight tracking-tight  header-title">
          Nolvi
        </h1>
      </header>
      <button
        onClick={() => handleOpenForm()}
        className="px-10 bg-[#f06d61] text-[#bfa686]"
      >
        +
      </button>
    </Disclosure>
  );
};

export default Header;
