import { z } from "zod";

import { publicProcedure } from "~/trpc/procedures";
import { router } from "../../trpc/root";
import { newsletterSubscribeDtoSchema } from "../models";
import { NewsletterService } from "../services";

export const newsletterRouter = router({
  subscribe: publicProcedure({
    limit: {
      every: "3s",
    },
  })
    .input(newsletterSubscribeDtoSchema)
    .output(z.void())
    .mutation(async ({ input }) => {
      return await NewsletterService.subscribe({
        email: input.email,
      });
    }),
});
