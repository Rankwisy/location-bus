import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Blog - Conseils Transport et Actualités | Location Bus Belgique';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Blog Location Bus Belgique : conseils transport, destinations touristiques, actualités du secteur. Guides pratiques pour vos voyages en bus.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/blog');
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Guide Complet des Transferts Aéroport à Bruxelles',
      excerpt: 'Découvrez tous nos conseils pour organiser votre transfert vers les aéroports belges en toute sérénité. Comparatif des options et tarifs.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      relatedServices: ['/services', '/fleet'],
      category: 'Transferts',
      author: 'Sarah Dupont',
      date: '15 Mars 2024',
      readTime: '5 min',
      featured: true
    },
    {
      id: 2,
      title: 'Les Plus Belles Excursions au Départ de Bruxelles',
      excerpt: 'Notre sélection des destinations incontournables pour vos sorties de groupe : Bruges, Gand, Amsterdam et bien plus encore.',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/graphicstock-unrecognizable-businessman-with-luggage-waiting-at-the-airport-going-to-enter-a-bus-sunny-day_r_qeaMrMW-scaled.jpg?updatedAt=1757936714334',
      relatedServices: ['/excursions'],
      category: 'Excursions',
      author: 'Jean-Pierre Martin',
      date: '12 Mars 2024',
      readTime: '7 min',
      featured: false
    },
    {
      id: 3,
      title: 'Organiser un Voyage d\'Entreprise Réussi',
      excerpt: 'Nos conseils d\'experts pour planifier vos déplacements professionnels : séminaires, team building, conventions.',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/Location-Bus-Bruxelles_Post_120.png?updatedAt=1757933839468',
      relatedServices: ['/services', '/about'],
      category: 'Entreprise',
      author: 'Mohammed Hassan',
      date: '8 Mars 2024',
      readTime: '6 min',
      featured: false
    },
    {
      id: 4,
      title: 'Transport Scolaire : Sécurité et Réglementation',
      excerpt: 'Tout ce que vous devez savoir sur la réglementation du transport scolaire en Belgique et nos engagements sécurité.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sécurité',
      author: 'Sarah Dupont',
      date: '5 Mars 2024',
      readTime: '4 min',
      featured: false
    },
    {
      id: 5,
      title: 'Les Avantages du Bus pour vos Événements Privés',
      excerpt: 'Mariages, anniversaires, sorties famille... Découvrez pourquoi le transport en bus est la solution idéale pour vos événements.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2099&q=80',
      category: 'Événements',
      author: 'Jean-Pierre Martin',
      date: '1 Mars 2024',
      readTime: '5 min',
      featured: false
    },
    {
      id: 6,
      title: 'Nouveautés 2024 : Notre Flotte se Modernise',
      excerpt: 'Découvrez les nouveaux véhicules qui rejoignent notre flotte cette année : plus de confort, plus d\'écologie.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      category: 'Actualités',
      author: 'Mohammed Hassan',
      date: '25 Février 2024',
      readTime: '3 min',
      featured: false
    }
  ];

  const categories = ['Tous', 'Transferts', 'Excursions', 'Entreprise', 'Sécurité', 'Événements', 'Actualités'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredPosts = selectedCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

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
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={`${featuredPost.title} - Guide expert Location Bus Belgique ${featuredPost.category.toLowerCase()} transport premium`}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                  À la Une
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span>{featuredPost.date}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
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
            {categories.map((category) => (
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
            {filteredPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={`${post.title} - Article blog Location Bus Belgique conseils ${post.category.toLowerCase()} transport professionnel`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-gray-700">{post.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    <Clock size={12} className="inline mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  
                  {/* Internal Links for Related Services */}
                  {post.relatedServices && post.relatedServices.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Articles liés :</p>
                      <div className="flex flex-wrap gap-2">
                        {post.relatedServices.map((serviceUrl, serviceIndex) => {
                          const serviceName = serviceUrl === '/services' ? 'Nos Services' : 
                                             serviceUrl === '/fleet' ? 'Notre Flotte' : 
                                             serviceUrl === '/excursions' ? 'Excursions' :
                                             serviceUrl === '/about' ? 'À Propos' : 'Services';
                          return (
                            <Link
                              key={serviceIndex}
                              to={serviceUrl}
                              className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded hover:bg-teal-200 transition-colors"
                            >
                              {serviceName}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <User size={14} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group-hover:underline"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Tag size={48} className="mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Aucun article trouvé</h4>
              <p className="text-gray-500">Essayez avec une autre catégorie ou revenez plus tard.</p>
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
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-lg border-none focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              S'inscrire
            </button>
          </div>
          <p className="text-teal-200 text-sm mt-4">
            Nous respectons votre vie privée. Désabonnement possible à tout moment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;