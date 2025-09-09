import {readFileSync} from "fs";
import path from "path";
import {fileURLToPath} from "url";

import type {PostCategory} from "@ashgw/db/raw";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Blog {
  slug: string;
  title: string;
  seoTitle: string;
  summary: string;
  isReleased: boolean;
  firstModDate: Date;
  lastModDate: Date;
  minutesToRead: number;
  tags: string[];
  category: PostCategory;
  mdxContentRaw: string;
}

function getCorresponsingMdxContent(slug: string): string {
  const filePath = path.join(__dirname, `${slug}.mdx`);
  const fileContent = readFileSync(filePath, "utf-8");
  if (fileContent.startsWith("---")) {
    const parts = fileContent.split("---");
    return parts.slice(2).join("---").trim();
  }
  return fileContent.trim();
}

export const blogs: Blog[] = [
  {
    slug: "bounce-tracking",
    title: "Bounce Tracking",
    seoTitle:
      "As third-party cookies phase out, bounce tracking continues to monitor your behavior",
    summary: "As third-party cookies phase out, your behavior is still tracked",
    isReleased: true,
    firstModDate: new Date("2023-10-09T08:15:00-04:00"),
    lastModDate: new Date("2023-10-09T08:15:00-04:00"),
    minutesToRead: 4,
    tags: ["http", "cybersec", "cookies"],
    category: "SOFTWARE",
    mdxContentRaw: getCorresponsingMdxContent("bounce-tracking"),
  },
  {
    slug: "branded-types",
    title: "Branded Types",
    seoTitle: "Write Safer TypeScript with Branded Types",
    summary: "Write safer TypeScript with branded types",
    isReleased: true,
    firstModDate: new Date("2024-04-27T09:15:00-04:00"),
    lastModDate: new Date("2024-04-27T09:15:00-04:00"),
    minutesToRead: 4,
    tags: ["typescript", "typing"],
    category: "SOFTWARE",
    mdxContentRaw: getCorresponsingMdxContent("branded-types"),
  },
  {
    slug: "cholesterol",
    title: "Cholesterol",
    seoTitle: "How bad science hijacked medicine and destroyed public health",
    summary: "How bad science hijacked medicine and destroyed public health",
    isReleased: true,
    firstModDate: new Date("2025-02-07T09:15:00-04:00"),
    lastModDate: new Date("2025-02-07T09:15:00-04:00"),
    minutesToRead: 17,
    tags: ["cholesterol", "statins", "fat"],
    category: "HEALTH",
    mdxContentRaw: getCorresponsingMdxContent("cholesterol"),
  },
  {
    slug: "debates",
    title: "Debates",
    seoTitle: "I won't debate you",
    summary: "I won't debate you",
    isReleased: true,
    firstModDate: new Date("2024-01-01T19:45:00-04:00"),
    lastModDate: new Date("2024-01-01T19:45:00-04:00"),
    minutesToRead: 3,
    tags: ["debates", "communication"],
    category: "PHILOSOPHY",
    mdxContentRaw: getCorresponsingMdxContent("debates"),
  },

  {
    slug: "dumb-questions",
    title: "Dumb Questions",
    seoTitle: "Why Dumb Questions Are a Sign of System Failure",
    summary: "Why they exist and what they reveal about systemic inefficiency",
    isReleased: true,
    firstModDate: new Date("2024-11-18T09:15:00-04:00"),
    lastModDate: new Date("2024-11-18T09:15:00-04:00"),
    minutesToRead: 8,
    tags: ["quality", "efficiency", "rants"],
    category: "SOFTWARE",
    mdxContentRaw: getCorresponsingMdxContent("dumb-questions"),
  },
];

