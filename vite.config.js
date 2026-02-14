import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/" for custom domain (e.g. imputex.com). Use "/imputex-site/" only if serving at github.io/imputex-site/
export default defineConfig({
  plugins: [react()],
  base: "/",
});
