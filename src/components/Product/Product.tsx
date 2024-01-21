import React from "react";
import { Product } from "./types";

const Product = ({ id, name, qty }: Product) => {
  return (
    <div
      key={id}
      className="bg-white flex items-center justify-between rounded-md w-4/5 h-16 mt-8 shadow-md"
    >
      <div className="flex flex-col font-bold ml-4 text-left items-center justify-center">
        <p className="text-xl">{name}</p>
        <p className="text-sm font-thin">{qty}</p>
      </div>
      <button
        onClick={() => {
          console.log("wena, hiciste click", name);
        }}
        className="w-10 h-full bg-[#f06d61] text-white items-center rounded-e-md"
      >
        X
      </button>
    </div>
  );
};

export default Product;
