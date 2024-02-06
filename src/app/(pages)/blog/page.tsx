import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from '@/app/(pages)/blog/content';
import CodeBlock from '@/app/components/reusables/syntax-highlighter';

export const metadata = {
  title: 'Blog',
  description: 'Here is a list of all my blogs.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();
  return (
    <section className="mx-auto container sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-3xl">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        All my blogs are here, unclassified, raw
      </h1>
      <CodeBlock
        code="pub fn main(){}"
        language="rust"
        showLineNumbers={true}
      ></CodeBlock>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.parsedContent.attributes.firstModDate) >
            new Date(b.parsedContent.attributes.firstModDate)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.filenameSlug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.filenameSlug}`}
          >
            <div className="w-full flex flex-col">
              <h3 className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.parsedContent.attributes.title}
              </h3>
              <Suspense fallback={<p className="h-6" />}>
                <p>69 views</p>
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}
