import type { Metadata } from "next";

import { createMetadata } from "@ashgw/seo";

import { TagsPage } from "~/app/components/pages/[tag]";
import { trpcServerSide } from "~/trpc/server";

interface DynamicRouteParams {
  params: { tag: string };
}

export const generateStaticParams = async () => {
  const posts = await trpcServerSide.post.getPostCards();
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)));
  return tags.map((tag) => ({ tag }));
};

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "Sort by tag.",
});

export default async function Tags({ params }: DynamicRouteParams) {
  const posts = await trpcServerSide.post.getPostCards();
  return <TagsPage posts={posts} tag={params.tag} />;
}
