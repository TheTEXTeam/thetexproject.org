import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }
});