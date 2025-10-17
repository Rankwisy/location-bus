import { BlogPost, BlogCategory, NewsletterSubscriber } from '../types/blog';
import { blogPosts, blogCategories, blogAuthors } from '../data/blogData';

export const blogService = {
  async getAllPosts(): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogPosts.filter(post => post.is_published));
      }, 100);
    });
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = blogPosts.find(p => p.slug === slug && p.is_published);
        resolve(post || null);
      }, 100);
    });
  },

  async getPostById(id: string): Promise<BlogPost | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = blogPosts.find(p => p.id === id && p.is_published);
        resolve(post || null);
      }, 100);
    });
  },

  async getPostByIdOrSlug(idOrSlug: string): Promise<BlogPost | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = blogPosts.find(p => (p.id === idOrSlug || p.slug === idOrSlug) && p.is_published);
        resolve(post || null);
      }, 100);
    });
  },

  async getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const category = blogCategories.find(c => c.slug === categorySlug);
        if (!category) {
          resolve([]);
          return;
        }

        const posts = blogPosts.filter(
          p => p.category_id === category.id && p.is_published
        );
        resolve(posts);
      }, 100);
    });
  },

  async getFeaturedPosts(): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const featured = blogPosts
          .filter(p => p.is_featured && p.is_published)
          .slice(0, 3);
        resolve(featured);
      }, 100);
    });
  },

  async getRelatedPosts(postId: string, categoryId: string, limit = 3): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const related = blogPosts
          .filter(p =>
            p.category_id === categoryId &&
            p.id !== postId &&
            p.is_published
          )
          .slice(0, limit);
        resolve(related);
      }, 100);
    });
  },

  async getAllCategories(): Promise<BlogCategory[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogCategories);
      }, 100);
    });
  },

  async incrementViewCount(postId: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
          post.views_count += 1;
        }
        resolve();
      }, 50);
    });
  },

  async subscribeToNewsletter(email: string): Promise<NewsletterSubscriber | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          reject(new Error('Adresse email invalide.'));
          return;
        }

        const subscriber: NewsletterSubscriber = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          is_active: true,
          subscribed_at: new Date().toISOString(),
          unsubscribed_at: null
        };

        resolve(subscriber);
      }, 500);
    });
  }
};
