import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <GlobalStyles />
      <App />
    </StrictMode>
  );
}
