'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiClock, FiExternalLink } from 'react-icons/fi';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import { BlogPost } from '@/lib/types';

export function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const response = await fetch('/api/medium');
        const data = await response.json();

        if (data.success && data.posts.length > 0) {
          setBlogPosts(data.posts);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch Medium posts:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMediumPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Blog & Writing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts on Web3, DevRel, and blockchain development
          </p>
        </AnimatedSection>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading articles...</p>
          </div>
        ) : error || blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <Card className="p-8">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Visit my Medium Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Check out my latest articles on blockchain, Web3, and developer relations.
                </p>
                <a
                  href="https://medium.com/@thakkarmohit90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  Read on Medium
                  <FiExternalLink size={18} />
                </a>
              </Card>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.url}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  {post.thumbnail ? (
                    <div
                      className="h-48 mb-4 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.thumbnail})` }}
                    />
                  ) : (
                    <div className="h-48 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl">📝</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FiClock size={16} />
                      {post.readTime}
                    </span>
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold"
                  >
                    Read on Medium
                    <FiExternalLink size={18} />
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
