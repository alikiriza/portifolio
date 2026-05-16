import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://alikirizacarol.vercel.app'}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
