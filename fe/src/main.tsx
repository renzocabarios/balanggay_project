import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Providers from "@/components/providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Providers>
      <App />
    </Providers>
  </>
);
// React.StrictMode
// React.StrictMode
