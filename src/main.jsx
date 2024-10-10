import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import RootLayout from "./RootLayout";
import "./index.css";
import { getContactsLoader } from "./loaders/contactsLoader";
import ErrorPage from "./ErrorPage";
// import Index from "./Index";

const router = createBrowserRouter([
  // {
  //   index: true,
  //   element: <Index />,
  // },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
