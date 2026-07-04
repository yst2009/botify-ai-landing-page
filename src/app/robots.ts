import { MetadataRoute } from 'next'

/**
 * Robots.txt Generator for Botify Agents
 * 
 * Rules:
 * - Allow all bots to crawl public pages (/)
 * - Disallow all bots from /dashboard and sub-routes
 * - Sitemap is explicitly declared at the canonical URL
 * 
 * Note: We use a SINGLE wildcard rule instead of repeating named bots.
 * Named-bot rules should only be added when you need DIFFERENT behavior
 * from specific crawlers. Duplicating them causes a malformed robots.txt.
 * 
 * Reference: https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt
 */

const BASE_URL = 'https://botify-agents.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Applies to all crawlers including Googlebot, GPTBot, PerplexityBot, etc.
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
