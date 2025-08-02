import { MetadataRoute } from 'next'
import { siteDetails } from '@/data/siteDetails'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteDetails.siteUrl

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services', 
    '/case-studies',
    '/pricing',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ]

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : path === '/pricing' ? 0.9 : 0.8,
  }))

  // If you have dynamic pages (blog posts, case studies, etc.), add them here
  // Example:
  // const dynamicUrls = await getDynamicPages()

  return [
    ...staticUrls,
    // ...dynamicUrls (when you have dynamic content)
  ]
}
