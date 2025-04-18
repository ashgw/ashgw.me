import type { PostDataRo } from "~/server/models";
import { BlogCards } from "~/app/components/pages/home/components/BlogCards";
import { NoTagsFound } from "./components/NoTagsFound";

export function TagsPage({ posts, tag }: { posts: PostDataRo[]; tag: string }) {
  const postsWithTag: PostDataRo[] = [];

  const allAvailableTags = new Set<string>("");

  posts.forEach((post) => {
    if (
      post.parsedContent.attributes.tags.includes(tag) &&
      post.parsedContent.attributes.isReleased
    ) {
      postsWithTag.push(post);
    }
    post.parsedContent.attributes.tags.forEach((tag) =>
      allAvailableTags.add(tag),
    );
  });

  if (postsWithTag.length > 0) {
    return <BlogCards posts={postsWithTag} />;
  }

  return <NoTagsFound validTags={allAvailableTags} />;
}
