import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { SITE_URL, IS_PROD } from "./src/consts";

export default defineConfig({
  site: IS_PROD ? SITE_URL : "http://localhost:4321",
  markdown: { syntaxHighlight: false },
  integrations: [mdx(), sitemap()],
});
