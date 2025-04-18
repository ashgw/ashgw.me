import { DateService } from "@ashgw/cross-runtime";
import { Badge } from "@ashgw/ui";

import type { PostDataRo } from "~/server/models";
import {
  FramerMotionFadeInComponent,
  ThreeTrafficLightsMovingObjects,
  YeetMe,
} from "~/app/components/misc/featured/blog";
import { ScrollUp } from "~/app/components/posts/components/ScrollUp";
import { H1 } from "./headers";
import { MDX } from "./mdx";
import { ReleaseDate } from "./ReleaseDate";

interface BlogPostPorps {
  postData: PostDataRo;
}

const featuredComponents = {
  YeetMe: YeetMe,
  TTLMO: ThreeTrafficLightsMovingObjects,
  FramerMotionFadeInComponent,
};

export function BlogPostData({ postData }: BlogPostPorps) {
  return (
    <section className="container mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <H1 id={postData.parsedContent.attributes.title}>
        {postData.parsedContent.attributes.title}
      </H1>
      <div className="mb-8 flex items-center justify-between text-sm sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px]">
        <ReleaseDate date={postData.parsedContent.attributes.firstModDate} />
        <div>
          {DateService.isSameMonthAndYear({
            stringDate: postData.parsedContent.attributes.firstModDate,
          }) ? (
            <div className="average-transition opacity-0 hover:opacity-100">
              <Badge variant={"outlineUpdated"}>Recent</Badge>
            </div>
          ) : (
            <div className="average-transition opacity-0 hover:opacity-100">
              <Badge variant={"outlineArchive"}>Archive</Badge>
            </div>
          )}
        </div>
      </div>
      <article className="text-wrap">
        <MDX
          source={postData.parsedContent.body}
          components={featuredComponents}
        />
      </article>
      <ScrollUp />
    </section>
  );
}
