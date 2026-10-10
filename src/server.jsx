import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App, routes, future } from "./App.jsx";

// Used by scripts/prerender.mjs only — never shipped to the browser.
export { routes };

export const render = (url) =>
  renderToString(
    <StaticRouter location={url} future={future}>
      <App />
    </StaticRouter>
  );
