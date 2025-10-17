import { supabase, isSupabaseAvailable } from '../lib/supabase';
import { BlogPost, BlogCategory, NewsletterSubscriber } from '../types/blog';

export const blogService = {
  async getAllPosts(): Promise<BlogPost[]> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Returning empty array.');
      return [];
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(*),
        author:blog_authors(*)
      `)
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Returning null.');
      return null;
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(*),
        author:blog_authors(*)
      `)
      .eq('slug', slug)
      .eq('is_published', true)
      .maybeSingle();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data;
  },

  async getPostById(id: string): Promise<BlogPost | null> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Returning null.');
      return null;
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(*),
        author:blog_authors(*)
      `)
      .eq('id', id)
      .eq('is_published', true)
      .maybeSingle();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data;
  },

  async getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Returning empty array.');
      return [];
    }

    const { data: category } = await supabase
      .from('blog_categories')
      .select('id')
      .eq('slug', categorySlug)
      .maybeSingle();

    if (!category) {
      return [];
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(*),
        author:blog_authors(*)
      `)
      .eq('category_id', category.id)
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts by category:', error);
      return [];
    }

    return data || [];
  },

  async getFeaturedPosts(): Promise<BlogPost[]> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Returning empty array.');
      return [];
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(*),
        author:blog_authors(*)
      `)
      .eq('is_featured', true)
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(3);

    if (error) {
      console.error('Error fetching featured posts:', error);
      return [];
    }

    return data || [];
  },

  async getRelatedPosts(postId: string, categoryId: string, limit = 3): Promise<BlogPost[]> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Returning empty array.');
      return [];
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        category:blog_categories(*),
        author:blog_authors(*)
      `)
      .eq('category_id', categoryId)
      .neq('id', postId)
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching related posts:', error);
      return [];
    }

    return data || [];
  },

  async getAllCategories(): Promise<BlogCategory[]> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Returning empty array.');
      return [];
    }

    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching categories:', error);
      return [];
    }

    return data || [];
  },

  async incrementViewCount(postId: string): Promise<void> {
    if (!isSupabaseAvailable()) {
      console.warn('Supabase is not available. Cannot increment view count.');
      return;
    }

    const { error } = await supabase.rpc('increment_post_views', { post_id: postId });

    if (error) {
      console.error('Error incrementing view count:', error);
    }
  },

  async subscribeToNewsletter(email: string): Promise<NewsletterSubscriber | null> {
    if (!isSupabaseAvailable()) {
      throw new Error('Le service de newsletter n\'est pas disponible pour le moment. Veuillez réessayer plus tard.');
    }

    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email, is_active: true })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        throw new Error('Cet email est déjà inscrit à notre newsletter.');
      }
      console.error('Error subscribing to newsletter:', error);
      throw new Error('Une erreur est survenue. Veuillez réessayer.');
    }

    return data;
  }
};
