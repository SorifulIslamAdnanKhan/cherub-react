import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import router from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </HelmetProvider>
  </React.StrictMode>
);
