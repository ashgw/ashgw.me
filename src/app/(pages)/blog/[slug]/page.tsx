import StyledMDX, { Heading as H1 } from '@/app/components/mdx/styled-mdx';
import formatDate from '@/lib/funcs/form-date';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { pub } from '@/lib/env';
import { getBlogPosts } from '@/app/(pages)/blog/content';
import { Badge } from '@/app/components/ui/badge';
import Loader from '@/app/components/reusables/loader';
export default async function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post?.filenameSlug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.parsedContent.attributes.title,
            datePublished: post.parsedContent.attributes.firstModDate,
            dateModified: post.parsedContent.attributes.lastModDate,
            description: post.parsedContent.attributes.seoTitle,
            url: pub.SITE_URL_PROD + `/blog/${post.filenameSlug}`,
            author: {
              '@type': 'Person',
              name: 'ashgw',
            },
          }),
        }}
      />
      <section className="mx-auto container sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <H1>{post.parsedContent.attributes.title}</H1>
        <div className="flex justify-between items-center mb-8 text-sm md:max-w-[650px]  lg:max-w-[750px] xl:max-w-[850px] ">
          <p className="text-sm dimmed">
            {formatDate(post.parsedContent.attributes.firstModDate)}
          </p>
          <Suspense fallback={<Loader />}>
            <Badge variant={'success'}>New</Badge>
          </Suspense>
        </div>
        <article className=" text-wrap">
          <StyledMDX source={post.parsedContent.body}></StyledMDX>
        </article>
      </section>
    </main>
  );
}
