// Serves the repo root like GitHub Pages does, for previewing the built site.
// Run via `npm run preview` (builds first). Stop with Ctrl+C.
import * as esbuild from "esbuild";

const port = Number(process.env.PORT) || 5173;
const ctx = await esbuild.context({});
await ctx.serve({ servedir: ".", port });
console.log(`Preview: http://localhost:${port}/  (Ctrl+C to stop)`);
