import React from "react";
import { Disclosure } from "@headlessui/react";

const Header = () => {
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
      <button className="px-10 bg-green-700 text-white">+</button>
    </Disclosure>
  );
};

export default Header;
