import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

/** Minimal config to generate icons pack for PWA */
export default defineConfig({
  preset,
  images: ["public/favicon.svg"],
});
