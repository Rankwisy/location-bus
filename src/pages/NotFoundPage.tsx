import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Search,
  AlertTriangle
} from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = '404 - Page Non Trouvée | Location Bus Belgique';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page non trouvée. Retournez à l\'accueil de Location Bus Belgique pour découvrir nos services de transport premium à Bruxelles.');
    }

    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, follow');

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.remove();
    }

    return () => {
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  const quickLinks = [
    { name: 'Accueil', href: '/', icon: Home, description: 'Retour à la page principale' },
    { name: 'Nos Services', href: '/services', icon: MapPin, description: 'Découvrir nos solutions transport' },
    { name: 'Notre Flotte', href: '/flotte', icon: Search, description: 'Véhicules disponibles' },
    { name: 'Contact', href: '/contactez-nous', icon: Phone, description: 'Nous contacter directement' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Error Icon */}
            <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="text-red-600" size={48} />
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl font-bold text-white mb-6">Page Non Trouvée</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Mais ne vous inquiétez pas, nous sommes là pour vous aider !
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Où Souhaitez-vous Aller ?
            </h3>
            <p className="text-xl text-gray-600">
              Voici quelques liens utiles pour continuer votre navigation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-teal-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <link.icon className="text-teal-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {link.name}
                </h4>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <div className="flex items-center justify-center text-teal-600 font-semibold group-hover:underline">
                  Visiter
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search Help */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Besoin d'Aide ?
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Si vous ne trouvez pas ce que vous cherchez, notre équipe 
                  est disponible pour vous aider à trouver le service de transport 
                  qui correspond parfaitement à vos besoins.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <Phone className="text-teal-600 mr-4" size={24} />
                    <div>
                      <p className="font-semibold">Appelez-nous directement</p>
                      <p className="text-sm text-gray-600">Service client disponible 7j/7</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="text-teal-600 mr-4" size={24} />
                    <div>
                      <p className="font-semibold">Visitez notre bureau</p>
                      <p className="text-sm text-gray-600">Avenue Herrmann Debroux 54, Bruxelles</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+3223420734"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    +32 2 342 07 34
                  </a>
                  <Link
                    to="/contactez-nous"
                    className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-bold transition-all duration-200 inline-flex items-center justify-center"
                  >
                    Nous Contacter
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
                  alt="Équipe service client Location Bus Belgique prête à aider - Support professionnel transport Bruxelles"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Services Les Plus Demandés
            </h3>
            <p className="text-xl text-gray-600">
              Découvrez nos services de transport les plus populaires
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Transferts Aéroport',
                description: 'Service professionnel vers tous les aéroports belges',
                link: '/services',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Excursions Touristiques',
                description: 'Découvrez la Belgique et l\'Europe avec nos guides',
                link: '/excursions',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Transport Entreprise',
                description: 'Solutions personnalisées pour vos événements professionnels',
                link: '/services',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Service premium Location Bus Belgique transport professionnel Bruxelles`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-teal-600 font-semibold group-hover:underline">
                    En savoir plus
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Prêt à Découvrir Nos Services ?
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Retournez à notre page d'accueil pour découvrir tous nos services 
            de transport premium à Bruxelles et en Europe.
          </p>
          <Link
            to="/"
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            <Home className="mr-2" size={24} />
            Retour à l'Accueil
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;