import { getCollection, type CollectionEntry } from "astro:content";
import { deslugify, slugify } from "./slug";

type Post = CollectionEntry<"blog">;

export const getTaxonomy = async (name: keyof Post["data"]) => {
  const posts = await getCollection("blog");
  const taxonomyPages = posts.map((post: Post) => post.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i] as string[];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push({
        name: categoryArray[j],
        slug: slugify(categoryArray[j]),
      });
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};

export const taxonomyFilter = (
  posts: Post[],
  name: keyof Post["data"],
  key: string,
) =>
  posts.filter((post) =>
    (post.data[name] as string[])
      .map((name: string) => deslugify(name))
      .includes(deslugify(key)),
  );
