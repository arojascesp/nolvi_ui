import React from "react";
import { Disclosure } from "@headlessui/react";
import { useDispatch } from "react-redux";

import { uiOpenFormModal } from "../../redux/actions/uiActions.ts";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Disclosure
      as="nav"
      className="flex bg-green-900 shadow-sm justify-between"
    >
      <header className="flex justify-center">
        <h1 className="m-1 text-white font-bold leading-tight tracking-tight  header-title">
          Nolvi
        </h1>
      </header>
      <button
        onClick={() => {
          dispatch(uiOpenFormModal);
        }}
        className="px-10 bg-green-700 text-white"
      >
        +
      </button>
    </Disclosure>
  );
};

export default Header;
