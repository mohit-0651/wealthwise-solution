
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Handle development mode specifically
  const isDev = mode === "development";
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      outDir: "dist", // ✅ Ensures Cloudflare deploys the correct folder
      emptyOutDir: true, // ✅ Clears old files before each build
      // Add specific build options for development mode
      sourcemap: isDev,
      minify: !isDev ? 'esbuild' : false,
    },
    plugins: [
      react(),
      mode === "development" ? componentTagger() : null, // ✅ Ensures proper production build
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
