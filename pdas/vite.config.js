import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 8192, // 默認是 4096 (4KB)，這裡設定為 8KB 或更小
  },
});
