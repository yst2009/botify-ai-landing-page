import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/dashboard/*'],
      },
      {
        userAgent: ['Googlebot', 'GPTBot', 'PerplexityBot'],
        allow: '/',
        disallow: ['/dashboard', '/dashboard/*'],
      }
    ],
    sitemap: 'https://botify-agents.vercel.app/sitemap.xml',
  }
}
