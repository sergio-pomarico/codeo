import { type CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">;

export function filteredBlogPosts(
  posts: Post[],
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {},
) {
  const filteredPosts = posts.reduce((acc: Post[], post) => {
    const { pubDate, published } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && !published) return acc;
    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;
    // add post to acc
    acc.push(post);
    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
    );
  }

  //limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}
