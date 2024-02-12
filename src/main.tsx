import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.tsx";
import Header from "./components/Header/Header.tsx";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import Layout from "./components/Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  </React.StrictMode>
);
