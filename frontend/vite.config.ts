import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: '/vca-muzon-website/', // Needed only when deploying to GitHub Pages, should match the repo name
  server: {
    host: "0.0.0.0", // important for Docker port: 5173,
    watch: {
      usePolling: true, // forces file change detection inside Docker
    },
  },
});
