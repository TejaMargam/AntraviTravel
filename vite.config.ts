import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  return {
    base: "./", // 👈 important for Hostinger
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});

// local
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// export default defineConfig({
//   plugins: [
//     react(),
//     runtimeErrorOverlay(),
//     ...(process.env.NODE_ENV !== "production" &&
//     process.env.REPL_ID !== undefined
//       ? [
//           await import("@replit/vite-plugin-cartographer").then((m) =>
//             m.cartographer(),
//           ),
//         ]
//       : []),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },
//   root: path.resolve(import.meta.dirname, "client"),
//   build: {
//     outDir: path.resolve(import.meta.dirname, "dist/public"),
//     emptyOutDir: true,
//   },
//   server: {
//     fs: {
//       strict: true,
//       deny: ["**/.*"],
//     },
//   },
// });

// github
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// export default defineConfig(async () => {
//   return {
//     base: "/AntraviTravel/", // 🔧 This is the critical fix
//     plugins: [
//       react(),
//       runtimeErrorOverlay(),
//       ...(process.env.NODE_ENV !== "production" &&
//       process.env.REPL_ID !== undefined
//         ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
//         : []),
//     ],
//     resolve: {
//       alias: {
//         "@": path.resolve(import.meta.dirname, "client", "src"),
//         "@shared": path.resolve(import.meta.dirname, "shared"),
//         "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//       },
//     },
//     root: path.resolve(import.meta.dirname, "client"),
//     build: {
//       outDir: path.resolve(import.meta.dirname, "dist/public"),
//       emptyOutDir: true,
//       rollupOptions: {
//         input: {
//           main: path.resolve(__dirname, "client/index.html"),
//         },
//       },
//     },
//     server: {
//       fs: {
//         strict: true,
//         deny: ["**/.*"],
//       },
//     },
//   };
// });

  // {
  //   "id": "Sheraton Full Moon Resort & Spa",
  //   "name": "Sheraton Maldives Full Moon Resort & Spa",
  //   "description": "A lush family-friendly island escape just 15 minutes by speedboat from Velana International Airport. The resort features villas, cottages and overwater retreats surrounded by white sandy beaches and coral reefs, with award-winning spa, multiple dining venues, kid-friendly amenities and a vibrant lagoon setting.",
  //   "shortDescription": "Island Paradise",
  //   "tag": "",
  //   "images": [
  //     "images/maldives/resorts/sheraton/sheraton-image-4.webp?w=800&h=600&fit=crop",
  //     "images/maldives/resorts/sheraton/sheraton-image-3.webp?w=800&h=600&fit=crop",
  //     "images/maldives/resorts/sheraton/sheraton-image-5.webp?w=800&h=600&fit=crop",
  //     "images/maldives/resorts/sheraton/sheraton-image-1.webp?w=800&h=600&fit=crop",
  //     "images/maldives/resorts/sheraton/sheraton-image-2.webp?w=800&h=600&fit=crop",
  //     "images/maldives/resorts/sheraton/sheraton-image-6.webp?w=800&h=600&fit=crop"
  //   ],
  //   "rating": 5,
  //   "StartsFrom ": "₹1,77,000 / STC* / Per Couple*",
  //   "duration": "3 Nights/4 Days",
  //   "location": "Furanafushi Island, North Malé Atoll",
  //   "features": [
  //     "Secluded Island",
  //     "Tennis Court",
  //     "Family Friendly Resort"
  //   ],
  //   "amenities": [
  //     "Complimentary WIFI",
  //     "Water Sports",
  //     "Family-Friendly Activities",
  //     "Speed Boat Transfers"
  //   ],
  //   "roomTypes": [
  //     "Deluxe Room / Garden View",
  //     "Beachfront Cottage",
  //     "Ocean Pool Villa",
  //     "Overwater Villa With Pool"
  //   ]
  // },