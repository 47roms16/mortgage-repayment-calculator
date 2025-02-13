import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.test.{js,jsx,ts,tsx}"],
  },
  plugins: [tailwindcss()],
});
