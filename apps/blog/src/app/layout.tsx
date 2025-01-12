import "@ashgw/css/global";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import { env } from "../env";
import { NamesService } from "../lib/services/Names.service";
import { Providers } from "./components/providers";
import { NavBar } from "./components/shared/nav";

const atkinsonHyperlegible = localFont({
  src: [
    {
      path: "../../../../packages/assets/fonts/AtkinsonHyperlegible/AtkinsonHyperlegible-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/fonts/AtkinsonHyperlegible/AtkinsonHyperlegible-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../packages/assets/fonts/AtkinsonHyperlegible/AtkinsonHyperlegible-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../../packages/assets/fonts/AtkinsonHyperlegible/AtkinsonHyperlegible-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-atkinson-hyperlegible", // a CSS variable for use in your styles
  display: "swap", // `swap` for better performance
});

const title = "Ashref Gwader";
const description =
  "Developer, writer, and self-proclaimed modern day philosopher.";
const url = new URL(env.NEXT_PUBLIC_WWW_PRODUCTION_URL);
const kw: string[] = ["Ashref Gwader", "ashgw", "blog", "tech", "TS", "Python"];

const postImageWidth = 1200; // in pixels
const postImageHeight = 630;
const postImageUrl = `https://via.placeholder.com/${postImageWidth}x${postImageHeight}.png/000000/ffffff/?text=${title}`;

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_WWW_PRODUCTION_URL),
  title: {
    default: "Ashref Gwader",
    template: "%s | Ashgw",
  },
  creator: "Ashref Gwader",
  keywords: kw,
  description: description,
  openGraph: {
    siteName:
      NamesService.getSiteName({
        url: env.NEXT_PUBLIC_WWW_PRODUCTION_URL,
      }) ?? "ashgw",
    locale: "en_US",
    publishedTime: "2023-12-01T09:15:00-0401",
    title,
    description,
    type: "article",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [postImageUrl],
  },
  category: "tech",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={atkinsonHyperlegible.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId={env.GA_ID as string} /> {/* TODO: fix this  */}
    </html>
  );
}
