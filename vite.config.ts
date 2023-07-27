import path from "path"
import { defineConfig } from "vitest/config"
import { name } from "./package.json"

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "BrazilianDates",
      fileName: format => `brazilian-dates.${format}.js`,
    },
  },
  test: {
    environment: "jsdom",
  },
})
