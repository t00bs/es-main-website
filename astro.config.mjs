// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { SITE_URL } from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // The three brand faces. Astro emits the @font-face rules, fingerprints the
  // files and preloads the ones BaseHead asks for, so none of that is hand-held
  // in CSS any more.
  fonts: [
    {
      name: "Helvetica Neue LT Std",
      cssVariable: "--font-es-sans",
      provider: fontProviders.local(),
      fallbacks: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Arial",
        "sans-serif",
      ],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/HelveticaNeueLTStd-55Roman.otf"],
          },
        ],
      },
    },
    {
      name: "Neue Pixel",
      cssVariable: "--font-es-pixel",
      provider: fontProviders.local(),
      fallbacks: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Arial",
        "sans-serif",
      ],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/NeuePixel-Regular.otf"],
          },
        ],
      },
    },
    {
      name: "Awesome Serif Italic VAR",
      cssVariable: "--font-es-serif",
      provider: fontProviders.local(),
      fallbacks: ["ui-serif", "Georgia", "Times New Roman", "serif"],
      options: {
        variants: [
          {
            weight: "100 900",
            style: "italic",
            src: ["./src/assets/fonts/AwesomeSerifItalicVAR.ttf"],
          },
        ],
      },
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
