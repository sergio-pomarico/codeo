import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://www.codeo.co/",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    },
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "title1",
          h2: "title2",
          h3: "title3",
          h4: "title4",
          p: "paragraph",
          img: "photo",
          ul: "ulist",
          ol: "olist",
          blockquote: "blockquote",
          table: "table",
          tr: "table-row",
          kbd: "keyboard",
          code: "code",
        },
      ],
    ],
  },
});
