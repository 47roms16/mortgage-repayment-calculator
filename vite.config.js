import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [tailwindcss()],
});
