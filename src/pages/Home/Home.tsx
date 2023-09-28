import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-600 h-screen flex justify-center">
      {/* CARD LISTA */}
      <div className="bg-green-500 h-1/5 w-9/12 flex flex-col items-center rounded-md my-12">
        {/* ETIQUETA PRODUCTO */}
        <div className="bg-white flex items-center justify-between rounded-md w-xs h-1/5 my-8">
          <p className="text-2xl ml-8">Chocolate</p>
          <button className="w-16 h-full bg-red-900 text-white items-center rounded-e">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
