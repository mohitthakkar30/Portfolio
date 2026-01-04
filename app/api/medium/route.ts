import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { BlogPost } from '@/lib/types';

const parser = new Parser();

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function GET() {
  try {
    const MEDIUM_RSS_URL = 'https://medium.com/feed/@thakkarmohit90';

    const feed = await parser.parseURL(MEDIUM_RSS_URL);

    const posts: BlogPost[] = feed.items.slice(0, 6).map((item) => {
      const content = item['content:encoded'] || item.content || item.contentSnippet || '';
      const description = item.description || item.contentSnippet || '';

      // Extract excerpt from content
      const cleanContent = stripHtml(content || description);
      const excerpt = cleanContent.slice(0, 150) + (cleanContent.length > 150 ? '...' : '');

      // Extract thumbnail from content if available
      let thumbnail: string | undefined;
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch) {
        thumbnail = imgMatch[1];
      }

      return {
        title: item.title || 'Untitled',
        excerpt,
        url: item.link || '',
        publishedDate: item.pubDate || new Date().toISOString(),
        thumbnail,
        readTime: calculateReadTime(cleanContent),
      };
    });

    return NextResponse.json(
      { success: true, posts },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching Medium RSS:', error);

    return NextResponse.json(
      {
        success: false,
        posts: [],
        error: 'Failed to fetch Medium posts',
      },
      { status: 500 }
    );
  }
}
