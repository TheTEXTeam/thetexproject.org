import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }
});