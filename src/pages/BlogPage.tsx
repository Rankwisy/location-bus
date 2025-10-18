import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { blogService } from '../services/blogService';
import { BlogPost, BlogCategory } from '../types/blog';
import { createBlogCollectionStructuredData, addStructuredData } from '../utils/seo';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [loading, setLoading] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  useEffect(() => {
    document.title = 'Blog - Conseils Transport et Actualités | Location Bus Belgique';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Blog Location Bus Belgique : conseils transport, destinations touristiques, actualités du secteur. Guides pratiques pour vos voyages en bus.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/blog');

    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsData, categoriesData] = await Promise.all([
          blogService.getAllPosts(),
          blogService.getAllCategories()
        ]);
        setBlogPosts(postsData);
        setCategories(categoriesData);

        const collectionSchema = createBlogCollectionStructuredData(
          postsData.slice(0, 10).map(post => ({
            title: post.title,
            url: `https://location-bus.be/blog/${post.slug}`,
            publishedAt: post.published_at
          }))
        );

        addStructuredData(collectionSchema);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterMessage('Veuillez entrer une adresse email valide.');
      return;
    }

    try {
      setNewsletterStatus('loading');
      await blogService.subscribeToNewsletter(newsletterEmail);
      setNewsletterStatus('success');
      setNewsletterMessage('Merci ! Vous êtes maintenant inscrit à notre newsletter.');
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterStatus('error');
      setNewsletterMessage(error instanceof Error ? error.message : 'Une erreur est survenue.');
    }
  };

  const categoryOptions = ['Tous', ...categories.map(cat => cat.name)];

  const filteredPosts = selectedCategory === 'Tous'
    ? blogPosts
    : blogPosts.filter(post => post.category?.name === selectedCategory);

  const featuredPost = blogPosts.find(post => post.is_featured);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des articles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog & Actualités
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Retrouvez nos conseils d'experts, guides pratiques et actualités 
              du transport pour optimiser vos déplacements en toute sérénité.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Article à la Une</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative aspect-video">
                <img
                  src={featuredPost.featured_image}
                  alt={`${featuredPost.title} - Guide expert Location Bus Belgique pour ${featuredPost.category?.name.toLowerCase() || 'transport'} avec chauffeur professionnel à Bruxelles`}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                  width="1200"
                  height="675"
                />
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                  À la Une
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  {featuredPost.category && (
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category.name}
                    </span>
                  )}
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-1" />
                    {featuredPost.read_time} min
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  {featuredPost.author && (
                    <>
                      <User size={16} className="mr-2" />
                      <span className="mr-4">{featuredPost.author.name}</span>
                    </>
                  )}
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(featuredPost.published_at).toLocaleDateString('fr-FR')}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Lire l'Article
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categoryOptions.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'Tous' ? 'Tous nos Articles' : `Articles : ${selectedCategory}`}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={post.featured_image}
                    alt={`${post.title} - Conseils et guide Location Bus Belgique ${post.category?.name.toLowerCase() || 'transport'} pour voyages en groupe à Bruxelles`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                  {post.category && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">{post.category.name}</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    <Clock size={12} className="inline mr-1" />
                    {post.read_time} min
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    {post.author && (
                      <>
                        <User size={14} className="mr-2" />
                        <span className="mr-4">{post.author.name}</span>
                      </>
                    )}
                    <Calendar size={14} className="mr-2" />
                    <span>{new Date(post.published_at).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group-hover:underline"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Tag size={48} className="mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-gray-600 mb-2">
                Aucun article trouvé
              </h4>
              <p className="text-gray-500">
                Essayez avec une autre catégorie ou revenez plus tard.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Restez Informés
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, 
            conseils d'experts et offres spéciales directement dans votre boîte mail.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4 mb-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-lg border-none focus:ring-2 focus:ring-white focus:outline-none"
                disabled={newsletterStatus === 'loading'}
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'loading' ? 'Envoi...' : "S'inscrire"}
              </button>
            </div>
            {newsletterMessage && (
              <p className={`text-sm ${newsletterStatus === 'success' ? 'text-white' : 'text-red-200'}`}>
                {newsletterMessage}
              </p>
            )}
          </form>
          <p className="text-teal-200 text-sm mt-4">
            Nous respectons votre vie privée. Désabonnement possible à tout moment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;