// vite.config.js
import { readFileSync } from "fs";
import { sveltekit } from "file:///home/project/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { timeFormat } from "file:///home/project/node_modules/d3/src/index.js";
import path from "path";
import svg from "file:///home/project/node_modules/vite-plugin-svgstring/index.js";
import dsv from "file:///home/project/node_modules/@rollup/plugin-dsv/dist/es/index.js";
var { version } = JSON.parse(readFileSync("package.json", "utf8"));
var timestamp = timeFormat("%Y-%m-%d-%H:%M")(/* @__PURE__ */ new Date());
var vite_config_default = defineConfig({
  define: {
    __VERSION__: JSON.stringify(version),
    __TIMESTAMP__: JSON.stringify(timestamp)
  },
  plugins: [sveltekit(), dsv(), svg()],
  resolve: {
    alias: {
      $actions: path.resolve("./src/actions"),
      $components: path.resolve("./src/components"),
      $data: path.resolve("./src/data"),
      $routes: path.resolve("./src/routes"),
      $runes: path.resolve("./src/runes"),
      $styles: path.resolve("./src/styles"),
      $svg: path.resolve("./src/svg"),
      $utils: path.resolve("./src/utils")
    }
  },
  ssr: {
    noExternal: ["bits-ui"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gXCJAc3ZlbHRlanMva2l0L3ZpdGVcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyB0aW1lRm9ybWF0IH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHN2ZyBmcm9tIFwidml0ZS1wbHVnaW4tc3Znc3RyaW5nXCI7XG5pbXBvcnQgZHN2IGZyb20gXCJAcm9sbHVwL3BsdWdpbi1kc3ZcIjtcblxuY29uc3QgeyB2ZXJzaW9uIH0gPSBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhcInBhY2thZ2UuanNvblwiLCBcInV0ZjhcIikpO1xuY29uc3QgdGltZXN0YW1wID0gdGltZUZvcm1hdChcIiVZLSVtLSVkLSVIOiVNXCIpKG5ldyBEYXRlKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRkZWZpbmU6IHtcblx0XHRfX1ZFUlNJT05fXzogSlNPTi5zdHJpbmdpZnkodmVyc2lvbiksXG5cdFx0X19USU1FU1RBTVBfXzogSlNPTi5zdHJpbmdpZnkodGltZXN0YW1wKVxuXHR9LFxuXHRwbHVnaW5zOiBbc3ZlbHRla2l0KCksIGRzdigpLCBzdmcoKV0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0JGFjdGlvbnM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL2FjdGlvbnNcIiksXG5cdFx0XHQkY29tcG9uZW50czogcGF0aC5yZXNvbHZlKFwiLi9zcmMvY29tcG9uZW50c1wiKSxcblx0XHRcdCRkYXRhOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9kYXRhXCIpLFxuXHRcdFx0JHJvdXRlczogcGF0aC5yZXNvbHZlKFwiLi9zcmMvcm91dGVzXCIpLFxuXHRcdFx0JHJ1bmVzOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9ydW5lc1wiKSxcblx0XHRcdCRzdHlsZXM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N0eWxlc1wiKSxcblx0XHRcdCRzdmc6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3N2Z1wiKSxcblx0XHRcdCR1dGlsczogcGF0aC5yZXNvbHZlKFwiLi9zcmMvdXRpbHNcIilcblx0XHR9XG5cdH0sXG5cdHNzcjoge1xuXHRcdG5vRXh0ZXJuYWw6IFtcImJpdHMtdWlcIl1cblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBRWhCLElBQU0sRUFBRSxRQUFRLElBQUksS0FBSyxNQUFNLGFBQWEsZ0JBQWdCLE1BQU0sQ0FBQztBQUNuRSxJQUFNLFlBQVksV0FBVyxnQkFBZ0IsRUFBRSxvQkFBSSxLQUFLLENBQUM7QUFFekQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsUUFBUTtBQUFBLElBQ1AsYUFBYSxLQUFLLFVBQVUsT0FBTztBQUFBLElBQ25DLGVBQWUsS0FBSyxVQUFVLFNBQVM7QUFBQSxFQUN4QztBQUFBLEVBQ0EsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDbkMsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sVUFBVSxLQUFLLFFBQVEsZUFBZTtBQUFBLE1BQ3RDLGFBQWEsS0FBSyxRQUFRLGtCQUFrQjtBQUFBLE1BQzVDLE9BQU8sS0FBSyxRQUFRLFlBQVk7QUFBQSxNQUNoQyxTQUFTLEtBQUssUUFBUSxjQUFjO0FBQUEsTUFDcEMsUUFBUSxLQUFLLFFBQVEsYUFBYTtBQUFBLE1BQ2xDLFNBQVMsS0FBSyxRQUFRLGNBQWM7QUFBQSxNQUNwQyxNQUFNLEtBQUssUUFBUSxXQUFXO0FBQUEsTUFDOUIsUUFBUSxLQUFLLFFBQVEsYUFBYTtBQUFBLElBQ25DO0FBQUEsRUFDRDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0osWUFBWSxDQUFDLFNBQVM7QUFBQSxFQUN2QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
