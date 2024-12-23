import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";

// export default defineConfig({
//   base: "/goit-react-hw-08/",
//   plugins: [
//     react(),
//     visualizer({
//       open: true,
//     }),
//   ],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             return id
//               .toString()
//               .split("node_modules/")[1]
//               .split("/")[0]
//               .toString();
//           }
//         },
//       },
//       plugins: [visualizer()],
//     },
//     chunkSizeWarningLimit: 1000,
//   },
// });
