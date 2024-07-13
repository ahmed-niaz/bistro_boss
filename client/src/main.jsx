import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import FirebaseProvider from "./providers/FirebaseProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <FirebaseProvider>
          <RouterProvider router={router} />
          <Toaster />
        </FirebaseProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
