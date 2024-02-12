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
    <div className="bg-[#a8ab7b] h-full flex flex-col items-center">
      <div className="bg-[#da825f] my-5 text-white rounded-xl">
        <button className="my-5 border-none bg-[#da825f] mx-5">Listas</button>
        <button className="my-5 border-none bg-[#da825f] mx-5">
          Despensas
        </button>
        <button className="my-5 border-none bg-[#da825f] mx-5">
          Inventarios
        </button>
      </div>
      {/* CARD LISTA */}
      <div className="bg-[#da825f] h-full w-5/6 flex flex-col items-center rounded-md shadow-md">
        {products.map(({ id, name, qty }) => (
          // CARD
          <Product id={id} name={name} qty={qty} key={id} />
        ))}
      </div>
      {/* <ProductForm /> */}
    </div>
  );
};

export default Home;
