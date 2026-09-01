import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/consts";

const isProd = process.env.DEPLOY_ENV === "dev";

export default defineConfig({
  site: isProd ? SITE_URL : "http://localhost:4321",
  markdown: { syntaxHighlight: false },
  integrations: [mdx(), sitemap()],
});
