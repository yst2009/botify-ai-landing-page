import { MetadataRoute } from 'next'

/**
 * Sitemap Generator for Botify Agents
 * 
 * Canonical Base: https://botify-agents.vercel.app
 * 
 * Important: `lastModified` is set to a static ISO date (not `new Date()`)
 * to avoid cache invalidation on every build. Update this date manually
 * only when meaningful content changes are deployed.
 * 
 * Reference: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

const BASE_URL = 'https://botify-agents.vercel.app'

// Update this timestamp only when deploying meaningful content changes.
// Using a static date prevents Google from re-crawling unnecessarily.
const LAST_UPDATED = '2026-07-04T20:00:00.000Z'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
