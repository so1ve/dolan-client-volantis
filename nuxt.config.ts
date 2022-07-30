import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  nitro: {
    preset: "netlify-edge",
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: "",
  },
  experimental: {
    reactivityTransform: true,
    viteNode: true,
  },
});
