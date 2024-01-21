import React from "react";
import { Product as Prod } from "../../components/Product/types";

import ProductForm from "../../components/ProductForm/ProductForm";
import Product from "../../components/Product/Product";

const Home = () => {
  const products: Prod[] = [
    {
      id: 1,
      name: "Chocolate",
      qty: 3,
    },
    {
      id: 2,
      name: "Café",
      qty: 1,
    },
    {
      id: 3,
      name: "Vino",
      qty: 1,
    },
    {
      id: 4,
      name: "Queso",
      qty: 3,
    },
  ];

  return (
    <div className="bg-[#a8ab7b] h-screen flex justify-center items-center mt-8">
      <ProductForm />

      {/* CARD LISTA */}
      <div className="bg-[#da825f] h-4/5 w-9/12 flex flex-col items-center rounded-md mt-4 overflow-y-auto shadow-md">
        {products.map(({ id, name, qty }) => (
          // CARD
          <Product id={id} name={name} qty={qty} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
