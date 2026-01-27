import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Shield, Clock, Star } from 'lucide-react';
import { updatePageSEO, addStructuredData, organizationStructuredData, localBusinessStructuredData } from '../utils/seo';

const HomePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Location Bus avec Chauffeur à Bruxelles | Transferts Aéroport | Location Bus Belgique',
      description: 'Location de bus et minibus avec chauffeur à Bruxelles. Service professionnel pour transferts d\'aéroport, excursions touristiques, voyages d\'entreprise. Devis gratuit ✓ Conducteurs expérimentés ✓',
      canonical: 'https://location-bus.be/',
      ogType: 'website',
      ogImage: 'https://ik.imagekit.io/by733ltn6/location-bus/slider4-1-1024x683-1.jpg?updatedAt=1757936830002',
      keywords: [
        'location bus belgique',
        'transport bus bruxelles',
        'chauffeur professionnel',
        'transfert aeroport bruxelles',
        'excursion touristique belgique',
        'minibus avec chauffeur',
        'voyage entreprise',
        'transport premium bruxelles',
        'location autocar belgique',
        'bus 50 places'
      ]
    });

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://location-bus.be/'
        }
      ]
    };

    const serviceData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Location de Bus avec Chauffeur',
      provider: {
        '@type': 'Organization',
        name: 'Location Bus Belgique',
        telephone: '+32-2-342-07-34',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Avenue Herrmann Debroux 54',
          addressLocality: 'Brussels',
          postalCode: '1160',
          addressCountry: 'BE'
        }
      },
      areaServed: {
        '@type': 'Country',
        name: 'Belgium'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de Transport',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transferts Aéroport',
              description: 'Service de transfert professionnel vers tous les aéroports belges et européens'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Transport d\'Entreprise',
              description: 'Solutions de transport pour vos événements professionnels et déplacements d\'équipe'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Excursions Touristiques',
              description: 'Découvrez la Belgique et l\'Europe avec nos circuits personnalisés'
            }
          }
        ]
      }
    };

    const combinedData = {
      '@context': 'https://schema.org',
      '@graph': [
        organizationStructuredData,
        localBusinessStructuredData,
        breadcrumbData,
        serviceData
      ]
    };

    addStructuredData(combinedData);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Professionnalisme',
      description: 'Équipe professionnelle et qualifiée avec une expérience significative dans la conduite de bus.'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Bus modernes aux meilleurs standards de sécurité, entretien régulier et minutieux.'
    },
    {
      icon: Clock,
      title: 'Ponctualité',
      description: 'Respect absolu des horaires pour ne pas perturber vos engagements professionnels ou personnels.'
    }
  ];

  const fleetHighlights = [
    {
      name: 'Minibus 19 Places',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/sp6.jpg',
      features: ['Climatisation', 'Sièges inclinables', 'Ceintures de sécurité'],
      description: 'Parfait pour les groupes moyens et les transferts personnalisés.'
    },
    {
      name: 'Bus 50 Places',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/70.png',
      features: ['Prises USB', 'Micro & Frigo', 'Toilettes', 'Machine à café'],
      description: 'Idéal pour les excursions et voyages de groupe confortables.'
    },
    {
      name: 'Autocar 60 Places',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/volvo-bus.png',
      features: ['Équipement premium', 'Grand confort', 'Tous services inclus'],
      description: 'Pour transporter les grands groupes avec un confort exceptionnel.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/by733ltn6/location-bus/slider4-1-1024x683-1.jpg?updatedAt=1757936830002')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-gray-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-gray-900/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Location Bus à
              <span className="block text-teal-400">Bruxelles</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto px-4">
              <strong>Transformez vos déplacements en expériences exceptionnelles !</strong> Découvrez notre service premium de transport en bus avec chauffeur professionnel - 
              l'alliance parfaite entre <em>luxe absolu</em>, <em>sécurité irréprochable</em> et <em>ponctualité garantie</em> pour tous vos voyages d\'affaires, excursions touristiques et événements privés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center min-h-[48px]"
              >
                Devis Gratuit Immédiat
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/flotte"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 flex items-center justify-center min-h-[48px]"
              >
                Voir Notre Flotte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excellence & Confiance : Votre Partenaire Transport Premium à Bruxelles
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Plus de 15 ans d'expertise</strong> au service de votre mobilité. Découvrez pourquoi <strong>98% de nos clients</strong> nous recommandent et nous choisissent pour leurs déplacements les plus importants.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                      <feature.icon className="text-teal-600" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-teal-400 p-6 sm:p-8 rounded-2xl text-gray-900">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  🚌 Transport Sur-Mesure & Tarifs Imbattables
                </h3>
                <p className="mb-4">
                  ✨ <strong>Service personnalisé</strong> adapté à vos besoins exacts<br/>
                  💰 <strong>Tarifs transparents</strong> sans surprise<br/>
                  ⚡ <strong>Réponse sous 2h</strong> garantie
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-gray-900 font-bold hover:underline text-lg"
                >
                  Découvrir Nos Tarifs Exclusifs
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Solutions Transport Professionnelles : Optimisez Vos Déplacements d'Entreprise
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
                <strong>Concentrez-vous sur votre business</strong> pendant que nous gérons votre mobilité avec une précision chirurgicale. Nos solutions premium transforment chaque trajet en avantage concurrentiel.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🛡️ Sécurité Militaire & Technologie de Pointe</h4>
                    <p className="text-gray-600 text-lg">
                      <Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">Flotte ultra-moderne</Link> aux <strong>standards européens les plus élevés</strong>. Maintenance préventive systématique, contrôles techniques renforcés et équipements de sécurité dernier cri pour une tranquillité absolue.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">⚡ Ponctualité Suisse & Fiabilité Absolue</h4>
                    <p className="text-gray-600 text-lg">
                      <strong>Zéro retard toléré !</strong> Notre engagement : respecter vos horaires à la minute près. Suivi GPS en temps réel, planification optimisée et chauffeurs experts pour une ponctualité irréprochable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🌟 Confort 5 Étoiles & Équipements Premium</h4>
                    <p className="text-gray-600 text-lg">
                      Voyagez dans un <strong>cocon de luxe</strong> : sièges en cuir inclinables, climatisation individuelle, Wi-Fi haut débit, prises USB, système audio HD. Découvrez tous nos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">services de transport premium</Link> pour transformer le temps de transport en moment de détente ou de productivité.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold mt-8 transition-all duration-200 transform hover:scale-105"
              >
                Découvrir Tous Nos Avantages
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Bus moderne luxueux pour transport entreprise avec sièges confortables et équipements premium"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-bold mb-4 text-base sm:text-lg">🏆 RAPPORT QUALITÉ/PRIX IMBATTABLE EN BELGIQUE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Votre Flotte Premium : Performance & Élégance</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto px-4">
              Choisissez votre véhicule parmi notre collection exclusive de <strong>50+ autocars dernière génération</strong>. Du <Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">minibus VIP 19 places</Link> à l'<Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">autocar grand luxe 60 places</Link>, nous avons la solution parfaite pour chaque occasion.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {fleetHighlights.map((vehicle, index) => (
              <div key={index} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index === 1 ? 'lg:scale-105 border-2 border-teal-400' : ''}`}>
                <div className="relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  {index === 1 && (
                    <div className="absolute top-4 right-4 bg-teal-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      Populaire
                    </div>
                  )}
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-2xl font-bold text-teal-600 mb-4">{vehicle.name}</h4>
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-600 flex items-center justify-center">
                        <CheckCircle className="text-teal-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mb-6">{vehicle.description}</p>
                  <Link
                    to="/contactez-nous"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
                  >
                    Réserver ce véhicule
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl mb-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Trouvez Votre Transport Idéal en 3 Clics</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <span className="text-teal-600 font-bold text-xl">1</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Sélectionnez</h5>
                  <p className="text-gray-600 text-sm">Choisissez votre véhicule selon vos besoins</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <span className="text-teal-600 font-bold text-xl">2</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Personnalisez</h5>
                  <p className="text-gray-600 text-sm">Définissez votre itinéraire et options</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <span className="text-teal-600 font-bold text-xl">3</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Réservez</h5>
                  <p className="text-gray-600 text-sm">Confirmation instantanée, paiement sécurisé</p>
                </div>
              </div>
            </div>
            <Link
              to="/flotte"
              className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Explorer Notre Flotte Complète
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tourism Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-bold mb-4 uppercase tracking-wide text-base sm:text-lg">🗺️ TOURS EXCLUSIFS & EXCURSIONS PREMIUM</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Explorez les Trésors Cachés de l'Europe avec Nos Guides Experts
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Vivez des <strong>aventures inoubliables</strong> au cœur des plus belles destinations européennes. Nos circuits sur-mesure transforment chaque excursion en voyage extraordinaire.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Grand Place de Bruxelles - Destination excursion touristique avec Location Bus Belgique"
                className="rounded-3xl shadow-2xl"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-6 flex-shrink-0">
                  <Star className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    🚌 Plateforme Révolutionnaire de Réservation Intelligente
                  </h4>
                  <p className="text-gray-600">
                    <strong>Révolutionnez votre façon de voyager !</strong> Notre plateforme innovante vous connecte instantanément avec nos chauffeurs d'élite. Réservation en ligne intuitive, suivi GPS en temps réel, et service client 24/7 pour une expérience sans faille.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-6 flex-shrink-0">
                  <Users className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    💼 Solutions Corporate Haut de Gamme & Gestion Intégrale
                  </h4>
                  <p className="text-gray-600">
                    <strong>Déléguez-nous votre logistique transport</strong> et concentrez-vous sur l'essentiel. De la sortie d'entreprise au séminaire international, en passant par les conférences prestigieuses : nous orchestrons chaque détail avec une précision d'orfèvre pour garantir le succès de vos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">événements professionnels</Link>. Découvrez également nos <Link to="/excursions" className="text-teal-600 hover:text-teal-700 font-semibold">excursions touristiques guidées</Link> pour vos sorties d'équipe.
                  </p>
                </div>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <p className="text-gray-700 font-medium text-center">
                  <strong>📈 Résultat prouvé :</strong> Nos clients corporate constatent une <strong>amélioration de 40% de leur productivité</strong> lors des déplacements grâce à notre service premium !
                </p>
              </div>
              <Link
                to="/excursions"
                className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Découvrir nos Excursions
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-white font-bold">⭐ 4.9/5 sur Google | 1000+ Avis Clients</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            🚀 Votre Voyage Exceptionnel Commence Ici !
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-teal-100 mb-8 max-w-2xl mx-auto px-4">
            <strong>Rejoignez les 10,000+ clients satisfaits</strong> qui nous font confiance pour leurs déplacements les plus importants. 
            Obtenez votre devis sur-mesure en moins de 2 minutes et découvrez pourquoi nous sommes le <em>N°1 du transport premium à Bruxelles</em> !
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="text-center text-white">
              <div className="text-2xl font-bold">⚡ 2min</div>
              <div className="text-sm text-teal-100">Devis instantané</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">🛡️ 100%</div>
              <div className="text-sm text-teal-100">Satisfaction garantie</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">📞 24/7</div>
              <div className="text-sm text-teal-100">Support disponible</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contactez-nous"
              className="bg-white text-teal-600 hover:bg-gray-100 px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center shadow-lg min-h-[48px]"
            >
              🎯 Mon Devis Gratuit & Immédiat
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:+3223420734"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 inline-flex items-center justify-center shadow-lg min-h-[48px]"
            >
              📞 Conseil Expert Immédiat
            </a>
          </div>
          <p className="text-teal-200 text-sm mt-6">
            ✅ <strong>Engagement qualité :</strong> Devis sans frais cachés | Annulation gratuite 24h | Prix fixe garanti
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;