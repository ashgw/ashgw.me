import { pub } from '@/lib/env';
import { MetadataRoute } from 'next';

const BASE_URL = pub.SITE_URL_PROD;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private'],
    },
    sitemap: BASE_URL + '/sitemap.xml',
  };
}
