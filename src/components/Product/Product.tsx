import React from "react";
import { Product } from "./types";

const Product = ({ id, name, qty }: Product) => {
  return (
    <div
      key={id}
      className="bg-white relative flex items-center justify-between rounded-xl w-5/6 h-16 mt-8 shadow-md overflow-x-auto"
    >
      <div className="flex flex-col font-bold ml-4 text-left items-start">
        <p className="text-xl">{name}</p>
        <p className="text-sm font-thin">{qty}</p>
      </div>
      <button
        onClick={() => {
          console.log("wena, hiciste click", name);
        }}
        className="absolute right-0 w-10 h-full bg-[#f06d61] text-white items-center rounded-e-xl"
      >
        X
      </button>
    </div>
  );
};

export default Product;
