// Follow this naming convention for zod schemas and types
// <entity(s)>-schemaRo for zod schemas
// <Entity(s)>-Ro for the types of the schemas

import { z } from "zod";

export const metaDataAttributesSchemaRo = z.object({
  title: z.string().min(1),
  seoTitle: z.string().min(1),
  summary: z.string().min(1),
  // fetching from mdx file, that's why not a date
  firstModDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{4}$/),
  lastModDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{4}$/),
  isReleased: z.boolean(),
  isSequel: z.boolean(),
  minutesToRead: z.union([z.string(), z.number()]),
  tags: z.array(z.string()),
  category: z.enum(["software", "health", "philosophy"]),
});

export const mdxFileDataSchemaRo = z.object({
  attributes: metaDataAttributesSchemaRo,
  body: z.string().min(1),
  bodyBegin: z.number(),
});

export const postDataSchemaRo = z.object({
  parsedContent: mdxFileDataSchemaRo,
  filename: z.string(),
});

export type MetaDataAttributesRo = z.infer<typeof metaDataAttributesSchemaRo>;
export type MdxFileDataRo = z.infer<typeof mdxFileDataSchemaRo>;
export type PostDataRo = z.infer<typeof postDataSchemaRo>;
