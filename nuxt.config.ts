import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "unplugin-icons/nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Dosis: [500],
    },
  },
  experimental: {
    reactivityTransform: true,
  },
});
