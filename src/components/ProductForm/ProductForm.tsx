import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { RootState } from "../../redux/store/store";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { uiCloseFormModal } from "../../redux/actions/uiActions";
import { startAddProduct } from "../../redux/actions/productActions";
import { debounce } from "../../helpers/helpers";

const ProductForm = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({
    name: "",
    qty: 0,
    id: null,
  });
  const dispatch = useAppDispatch();
  const uiState = useAppSelector((state: RootState) => state.ui);
  const handleCloseForm = () => {
    dispatch(uiCloseFormModal);
  };
  const handleSaveProduct = () => {
    setProduct({
      ...product,
      qty: count,
    });

    dispatch(startAddProduct(product));
    handleCloseForm();
    console.log({ product });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Transition appear show={uiState.isOpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseForm}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="mt-24 flex flex-col min-h-full items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col justify-center items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Añadir Producto
                  </Dialog.Title>
                  <div className="flex flex-col justify-center items-center my-5">
                    <div className="relative mb-3">
                      <input
                        type="text"
                        name="name"
                        id="product_name"
                        className="text-gray-dark border-2 peer block w-full appearance-none rounded-full border-gray-400 px-0 py-[14px] pl-6 text-sm focus:border-gray-800 focus:outline-none focus:ring-0"
                        placeholder="Nombre"
                        onChange={(e) => {
                          setProduct({
                            ...product,
                            name: e.target.value,
                          });
                        }}
                        required
                      />
                      <label
                        htmlFor="product_name"
                        className="absolute top-4 left-6 text-gray-middle bg-white duration-300 transform -translate-y-6 transparent peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:px-[4px] peer-focus:text-gray-dark peer-focus:transparent"
                      >
                        Nombre
                      </label>
                    </div>
                    <div className="h-10 w-32">
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          onClick={() => {
                            if (count > 0) {
                              setCount(count - 1);
                            }
                          }}
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                          name="custom-input-number"
                          value={count}
                          onChange={() => {}}
                        />
                        <button
                          onClick={() => {
                            setCount(count + 1);
                          }}
                          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={debounce(() => {
                        handleSaveProduct();
                      }, 600)}
                    >
                      Guardar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductForm;
