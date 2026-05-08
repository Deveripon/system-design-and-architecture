import type { MetadataRoute } from 'next';
import { courseData } from '@/lib/course-data';

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://learn-system-design-bn.vercel.app/';

export default function sitemap(): MetadataRoute.Sitemap {
    const topicEntries: MetadataRoute.Sitemap = courseData.flatMap(phase =>
        phase.topics.map(topic => ({
            url: `${siteUrl}/topic/${topic.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))
    );

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...topicEntries,
    ];
}

