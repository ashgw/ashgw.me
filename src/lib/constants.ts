import { nextJS, pub } from '@/lib/env';
export const BLOG_CONTENT_PATH = '/public/blogs';
export const BUSINESS_CONTENT_PATH = '/public/services';
export const BLOG_URI = '/blog';
export const BLOG_TAG_URI = '/blog/tag';
export const BLOG_API_URI = '/api/blogs';
export const SITE_URL = nextJS.NEXT_DEV_URL;
export const EMAIL = pub.EMAIL;
export const Status = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};
