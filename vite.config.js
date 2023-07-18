import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({ imports: ["vue", "vue-router", "pinia"] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  build: {
    outDir: "dwgl",
  },
  server: {
    https: false,
    port: 8001,
    host: "0.0.0.0",
    open: false,
    cors: true,
    proxy: {},
    hmr: false,
  },
});
