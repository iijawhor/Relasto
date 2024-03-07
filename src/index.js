import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Listing,
  PropertyDetail,
  AgentList,
  AgentProfile,
  BlogPage
} from "./exports/exports";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/listing",
    element: <Listing />
  },
  {
    path: "/property-detail/:id",
    element: <PropertyDetail />
  },
  {
    path: "/agent-list",
    element: <AgentList />
  },
  {
    path: "/blog-page",
    element: <BlogPage />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
