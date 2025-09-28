import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Event from "./components/Event/event.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Event />
  </StrictMode>
);
