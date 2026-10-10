import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App, future } from "./App.jsx";

// Pages are prerendered to HTML — hydrate instead of rendering from scratch.
hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter future={future}>
    <App />
  </BrowserRouter>
);
