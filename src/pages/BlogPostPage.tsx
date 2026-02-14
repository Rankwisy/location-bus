import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, AlertCircle, ChevronRight } from 'lucide-react';
import { blogService } from '../services/blogService';
import { BlogPost } from '../types/blog';
import { createBlogPostStructuredData, createBreadcrumbStructuredData, addStructuredData } from '../utils/seo';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);

        const postData = await blogService.getPostByIdOrSlug(slug);

        if (!postData) {
          setError('Article non trouvé');
          setLoading(false);
          return;
        }

        setPost(postData);

        document.title = `${postData.title} | Location Bus Belgique`;

        const metaTags = [
          { name: 'description', content: postData.excerpt },
          { name: 'keywords', content: `${postData.title}, location bus belgique, ${postData.category?.name || 'transport'}` },
          { name: 'author', content: postData.author?.name || 'Location Bus Belgique' },
          { property: 'og:title', content: postData.title },
          { property: 'og:description', content: postData.excerpt },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: `https://location-bus.be/blog/${postData.slug}` },
          { property: 'og:image', content: postData.featured_image },
          { property: 'article:published_time', content: postData.published_at },
          { property: 'article:modified_time', content: postData.updated_at },
          { property: 'article:author', content: postData.author?.name || 'Location Bus Belgique' },
          { property: 'article:section', content: postData.category?.name || 'Blog' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: postData.title },
          { name: 'twitter:description', content: postData.excerpt },
          { name: 'twitter:image', content: postData.featured_image }
        ];

        metaTags.forEach(({ name, property, content }) => {
          const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
          let meta = document.querySelector(selector);

          if (!meta) {
            meta = document.createElement('meta');
            if (name) meta.setAttribute('name', name);
            if (property) meta.setAttribute('property', property);
            document.head.appendChild(meta);
          }

          meta.setAttribute('content', content);
        });

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://location-bus.be/blog/${postData.slug}`);

        const blogPostSchema = createBlogPostStructuredData({
          title: postData.title,
          excerpt: postData.excerpt,
          content: postData.content,
          featuredImage: postData.featured_image,
          authorName: postData.author?.name || 'Location Bus Belgique',
          publishedAt: postData.published_at,
          updatedAt: postData.updated_at,
          slug: postData.slug,
          categoryName: postData.category?.name,
          readTime: postData.read_time
        });

        const breadcrumbSchema = createBreadcrumbStructuredData([
          { name: 'Accueil', url: 'https://location-bus.be' },
          { name: 'Blog', url: 'https://location-bus.be/blog' },
          { name: postData.category?.name || 'Articles', url: `https://location-bus.be/blog#${postData.category?.slug || 'all'}` },
          { name: postData.title, url: `https://location-bus.be/blog/${postData.slug}` }
        ]);

        addStructuredData({
          '@context': 'https://schema.org',
          '@graph': [blogPostSchema, breadcrumbSchema]
        });

        if (postData.category_id) {
          const related = await blogService.getRelatedPosts(postData.id, postData.category_id, 3);
          setRelatedPosts(related);
        }

      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Erreur lors du chargement de l\'article');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post?.title || '');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
              <div className="h-96 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <AlertCircle size={64} className="mx-auto text-yellow-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Article non trouvé
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {error || 'Désolé, l\'article que vous recherchez n\'existe pas ou a été supprimé.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <ArrowLeft className="mr-2" size={18} />
                Retour au Blog
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <ChevronRight size={16} className="text-gray-400" />
              </li>
              <li>
                <Link to="/blog" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                  Blog
                </Link>
              </li>
              {post?.category && (
                <>
                  <li>
                    <ChevronRight size={16} className="text-gray-400" />
                  </li>
                  <li>
                    <Link
                      to={`/blog#${post.category.slug}`}
                      className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      {post.category.name}
                    </Link>
                  </li>
                </>
              )}
              <li>
                <ChevronRight size={16} className="text-gray-400" />
              </li>
              <li className="text-gray-900 font-medium line-clamp-1">
                {post?.title}
              </li>
            </ol>
          </nav>

          <Link
            to="/blog"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold mb-8"
          >
            <ArrowLeft className="mr-2" size={18} />
            Retour au Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                {post.category && (
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category.name}
                  </span>
                )}
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={16} className="mr-1" />
                  {post.read_time} min de lecture
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  {post.author && (
                    <>
                      <User size={18} className="mr-2" />
                      <span className="mr-4 font-medium">{post.author.name}</span>
                    </>
                  )}
                  <Calendar size={18} className="mr-2" />
                  <span>{new Date(post.published_at).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 text-sm mr-2">Partager :</span>
                  <button
                    onClick={shareOnFacebook}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    aria-label="Partager sur Facebook"
                  >
                    <Facebook size={18} />
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors"
                    aria-label="Partager sur Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors"
                    aria-label="Partager sur LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
            </div>

            {post.featured_image && (
              <div className="mb-12 aspect-video">
                <img
                  src={post.featured_image}
                  alt={`${post.title} - Article complet Location Bus Belgique sur ${post.category?.name.toLowerCase() || 'le transport'} avec conseils d'experts`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  loading="eager"
                  width="1200"
                  height="675"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                {post.excerpt}
              </div>

              <div
                className="blog-content text-gray-800 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {post.author && (
              <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
                <div className="flex items-start space-x-6">
                  {post.author.avatar_url && (
                    <img
                      src={post.author.avatar_url}
                      alt={post.author.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      À propos de {post.author.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Articles Similaires
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <article>
                      <div className="relative">
                        <img
                          src={relatedPost.featured_image}
                          alt={`${relatedPost.title} - Article connexe Location Bus Belgique ${relatedPost.category?.name || 'blog'}`}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          width="400"
                          height="192"
                        />
                        {relatedPost.category && (
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs font-semibold text-gray-700">
                              {relatedPost.category.name}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-2" />
                          <span>{new Date(relatedPost.published_at).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Réserver Votre Transport ?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour obtenir votre devis gratuit et personnalisé.
          </p>
          <Link
            to="/contactez-nous"
            className="inline-flex items-center bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Obtenir un Devis
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
