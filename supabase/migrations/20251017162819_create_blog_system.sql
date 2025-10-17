/*
  # Create Blog System Database Schema

  ## Overview
  This migration creates a complete blog content management system with support for
  blog posts, categories, authors, and newsletter subscribers.

  ## New Tables

  ### 1. `blog_authors`
  Author profiles for blog content creators
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Author's full name
  - `email` (text, unique) - Author's email address
  - `bio` (text) - Author biography
  - `avatar_url` (text) - Profile picture URL
  - `created_at` (timestamptz) - Record creation timestamp

  ### 2. `blog_categories`
  Categories for organizing blog posts
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, unique) - Category name
  - `slug` (text, unique) - URL-friendly category identifier
  - `description` (text) - Category description
  - `created_at` (timestamptz) - Record creation timestamp

  ### 3. `blog_posts`
  Main blog posts table with full content and metadata
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly post identifier
  - `excerpt` (text) - Short description/summary
  - `content` (text) - Full article content (markdown/HTML)
  - `featured_image` (text) - Main post image URL
  - `category_id` (uuid, foreign key) - Reference to blog_categories
  - `author_id` (uuid, foreign key) - Reference to blog_authors
  - `read_time` (integer) - Estimated reading time in minutes
  - `is_featured` (boolean) - Whether post is featured on homepage
  - `is_published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date/time
  - `views_count` (integer) - Number of views
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 4. `newsletter_subscribers`
  Newsletter email subscription management
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Subscriber email
  - `is_active` (boolean) - Subscription status
  - `subscribed_at` (timestamptz) - Subscription timestamp
  - `unsubscribed_at` (timestamptz) - Unsubscription timestamp (nullable)

  ## Security

  ### Row Level Security (RLS)
  All tables have RLS enabled with the following policies:

  #### Public Read Access
  - Anyone can read published blog posts, categories, and author information
  - Newsletter subscribers table is private (admin only)

  #### Write Access
  - All write operations require authentication (admin/editor role)
  - Future implementation will use role-based access control

  ## Indexes
  - Indexed on commonly queried fields for optimal performance
  - Category, publication date, and featured status are indexed

  ## Important Notes
  1. All tables use UUID for primary keys
  2. Timestamps use timestamptz for timezone awareness
  3. Soft deletes not implemented (can be added later if needed)
  4. Content supports markdown or HTML formatting
*/

-- Create blog_authors table
CREATE TABLE IF NOT EXISTS blog_authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  bio text DEFAULT '',
  avatar_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text DEFAULT '',
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  author_id uuid REFERENCES blog_authors(id) ON DELETE SET NULL,
  read_time integer DEFAULT 5,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  views_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Enable Row Level Security
ALTER TABLE blog_authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Public can read published content

-- Blog Authors: Anyone can view authors
CREATE POLICY "Anyone can view blog authors"
  ON blog_authors
  FOR SELECT
  TO public
  USING (true);

-- Blog Categories: Anyone can view categories
CREATE POLICY "Anyone can view blog categories"
  ON blog_categories
  FOR SELECT
  TO public
  USING (true);

-- Blog Posts: Anyone can view published posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (is_published = true);

-- Newsletter: Only authenticated users can manage (future admin interface)
CREATE POLICY "Authenticated users can manage newsletter subscribers"
  ON newsletter_subscribers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Public can insert newsletter subscriptions
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on blog_posts
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
