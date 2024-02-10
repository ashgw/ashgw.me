'use server';
import { promises as fsPromises } from 'fs';
import path from 'path';
import fm from 'front-matter';
import type { MDXData } from '@/lib/types/mdx';
import { BLOG_CONTENT_PATH } from '@/lib/constants';
import { Maybe } from '@/lib/types/global';

const MDX_DIR = path.join(process.cwd(), BLOG_CONTENT_PATH);

export type _MaybeBlogData = {
  parsedContent: Maybe<MDXData>;
  filenameSlug: string;
};

function parseMDX(content: string): MDXData {
  return fm(content) as MDXData;
}

async function getMDXFiles(dir: string): Promise<Maybe<string[]>> {
  try {
    const files = await fsPromises.readdir(dir);
    const mdxFiles = files.filter((file) => path.extname(file) === '.mdx');
    return mdxFiles;
  } catch (error) {
    console.error('Error reading directory:', error);
    // TODO: handle error
    return;
  }
}

async function readMDXFile(filePath: string): Promise<Maybe<MDXData>> {
  try {
    let rawContent = await fsPromises.readFile(filePath, 'utf-8');
    return parseMDX(rawContent);
  } catch (error) {
    // TODO: hadnle err
    console.error('Error reading MDX file:', error);
    return;
  }
}

async function getMDXData(dir: string): Promise<Maybe<_MaybeBlogData[]>> {
  let mdxFiles = await getMDXFiles(dir);
  if (mdxFiles === undefined) {
    return;
  }
  const blogDataPromises = mdxFiles.map(async (file) => {
    const parsedContent = await readMDXFile(path.join(dir, file));
    const filenameSlug: string = path.basename(file, path.extname(file));
    return {
      parsedContent,
      filenameSlug,
    };
  });

  return Promise.all(blogDataPromises);
}

export async function getBlogPosts(): Promise<Maybe<_MaybeBlogData[]>> {
  return getMDXData(MDX_DIR);
}
