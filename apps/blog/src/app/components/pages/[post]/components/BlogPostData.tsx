"use client";

import Link from "next/link";
import { Edit } from "lucide-react";

import { DateService } from "@ashgw/cross-runtime";
import { Badge, Button } from "@ashgw/ui";

import type { PostDetailRo } from "~/api/models";
import { featuredComponents } from "~/app/components/misc/featured/blog";
import { ScrollUp } from "~/app/components/misc/postCards/components/ScrollUp";
import { H1 } from "./headers";
import { MDX } from "./mdx";
import { ReleaseDate } from "./ReleaseDate";

interface BlogPostPorps {
  postData: PostDetailRo;
}

export function BlogPostData({ postData }: BlogPostPorps) {
  return (
    <section className="container mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <div className="flex items-center justify-between">
        <H1 id={postData.title}>{postData.title}</H1>
        <Link href={`/editor?blog=${postData.slug}`} className="ml-4">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full"
            aria-label={`Edit blog post: ${postData.title}`}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="mb-8 flex items-center justify-between text-sm sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px]">
        <ReleaseDate date={postData.firstModDate.toISOString()} />
        <div>
          {DateService.isSameMonthAndYear({
            stringDate: postData.firstModDate.toISOString(),
          }) ? (
            <div className="average-transition opacity-0 hover:opacity-100">
              <Badge variant="outlineUpdated">Recent</Badge>
            </div>
          ) : (
            <div className="average-transition opacity-0 hover:opacity-100">
              <Badge variant="outlineArchive">Archive</Badge>
            </div>
          )}
        </div>
      </div>
      <article className="text-wrap">
        <MDX
          source={postData.fontMatterMdxContent.body}
          components={featuredComponents}
        />
      </article>
      <ScrollUp />
    </section>
  );
}
