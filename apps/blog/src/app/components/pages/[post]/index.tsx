import { memo } from "react";

import type { PostArticleRo } from "~/api/models";
import { Newsletter } from "~/app/components/pages/[post]/components/newsletter";
import { BlogPostData } from "./components/blog-post-data";

export const BlogPostPage = memo(function BlogPostPage({
  postData,
}: {
  postData: PostArticleRo;
}) {
  return (
    <>
      <main className="pt-5">
        <BlogPostData postData={postData} />
      </main>
      <div className="py-10"></div>
      <Newsletter />
    </>
  );
});
