import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import DirectMessage from "DirectMessage/DirectMessage";
import { Component } from "react";
import "./style.css";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "dm", Component: DirectMessage },
      { path: "server", Component: Component },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
