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
});
