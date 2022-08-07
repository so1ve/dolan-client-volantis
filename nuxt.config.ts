import { defineNuxtConfig } from "nuxt";

import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  unocss: {
    preflight: true,
    attributify: true,
    theme: {
      breakpoints: {
        "3xl": "2048px",
      },
      colors: {
        card: {
          bg: "#fff",
          text: "rgba(68, 68, 68, 0.7)",
        },
        text: "#444",
      },
    },
    transformers: [
      transformerVariantGroup(),
    ],
  },
  colorMode: {
    classSuffix: "",
  },
  experimental: {
    reactivityTransform: true,
  },
});
