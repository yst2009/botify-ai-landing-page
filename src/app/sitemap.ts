import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://botify-agents.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly', // تعديل التردد ليكون شهرياً
      priority: 1.0,
    },
  ]
}
