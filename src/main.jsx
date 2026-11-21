import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const root = document.getElementById("root");

// En production, le HTML est pré-généré au build (scripts/prerender.mjs) : on l'hydrate.
if (root.firstElementChild && root.firstElementChild.tagName !== "NOSCRIPT") {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
