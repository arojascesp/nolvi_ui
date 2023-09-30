import React from "react";

const Home = () => {
  type Producto = {
    id: number;
    name: string;
    qty: number;
  };
  const productos: Producto[] = [
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
  ];

  return (
    <div className="bg-blue-600 h-screen flex justify-center">
      {/* CARD LISTA */}
      <div className="bg-green-500 h-4/5 w-9/12 flex flex-col items-center rounded-md my-12 overflow-y-auto">
        {productos.map(({ id, name, qty }) => (
          <div
            key={id}
            className="bg-white flex items-center justify-between rounded-md w-4/5 h-16 mt-8"
          >
            <div className="flex flex-col font-bold ml-4 text-left justify-start">
              <p className="text-xl">{name}</p>
              <p className="text-sm font-thin">{qty}</p>
            </div>
            <button className="w-10 h-full bg-red-900 text-white items-center rounded-e">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
