import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://deluxe-cuchufli-c4dd4f.netlify.app",
  integrations: [preact()]
});