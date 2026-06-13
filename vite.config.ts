import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Zet deze lege array helemaal bovenaan op het hoogste niveau, 
  // puur om het Cloudflare script niet te laten crashen:
  plugins: [],
  
  vite: {
    base: '/Trotsvast/', 
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
