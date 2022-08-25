import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  shortcuts: {
    cover: "flex flex-col items-center justify-center max-w-full",
  },
  theme: {
    breakpoints: {
      "3xl": "2048px",
    },
    colors: {
      site: {
        body: "#f4f4f4",
        bg: "#f4f4f4",
        inner: "#fff",
      },
      card: {
        bg: "#fff",
        text: "rgba(68, 68, 68, 0.7)",
      },
      text: "#444",
      meta: "#888",
    },
    textShadow: {
      cover: "0 1px 2px rgb(0 0 0 / 10%)",
    },
    animation: {
      keyframes: {
        "scroll-down": `
{
  0% {
    top: 0;
    opacity: 1;
  }
  50% {
    top: -16px;
    opacity: .4;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}`,
      },
    },
    shadow: {
      card: "1123",
    },
  },
  presets: [
    presetUno(),
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true,
      ignoreAttributes: [
        "text",
      ],
    }),
    presetIcons(),
    // @ts-expect-error Bad = =
    presetRemToPx(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
});
