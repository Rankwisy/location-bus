export interface BlogAuthor {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar_url: string;
  created_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category_id: string;
  author_id: string;
  read_time: number;
  is_featured: boolean;
  is_published: boolean;
  published_at: string;
  views_count: number;
  created_at: string;
  updated_at: string;
  category?: BlogCategory;
  author?: BlogAuthor;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  is_active: boolean;
  subscribed_at: string;
  unsubscribed_at: string | null;
}
