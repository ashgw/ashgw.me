import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost } from '@/app/actions/blog';
import { getBlogPosts } from '@/app/api/blogs/content';
import { pub } from '@/lib/env';
import LoadingScreen from '../loading';
import BlogSection from './_blog-section';

type RouteParams = {
  params: { post: string };
};

export const generateStaticParams = async () => {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ post: post.filenameSlug }));
};

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const post = await getBlogPost(params.post);
  if (!post) {
    return {};
  }
  const postAttrs = post.parsedContent.attributes;
  const title = postAttrs.seoTitle;
  const description = postAttrs.summary;
  const url = pub.SITE_URL_PROD + '/' + post.filenameSlug;

  const postImageWidth = 1200;
  const postImageHeight = 630;
  const postImageUrl = `https://via.placeholder.com/${postImageWidth}x${postImageHeight}.png/000000/ffffff/?text=${title}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      images: [
        {
          url: postImageUrl,
          width: postImageWidth,
          height: postImageHeight,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [postImageUrl],
    },
  };
}

export default async function Blog({ params }: RouteParams) {
  const post = await getBlogPost(params.post);
  if (post) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <main className="pt-5">
          <BlogSection post={post} />
        </main>
      </Suspense>
    );
  } else {
    return notFound();
  }
}
