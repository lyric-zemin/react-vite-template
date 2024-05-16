import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsPaths from "vite-tsconfig-paths";
import autoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    react(),
    tsPaths(),
    autoImport({
      imports: ["react", { react: ["createContext"] }],
      dts: "./src/types/auto-imports.d.ts",
    }),
  ],

  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },

  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
