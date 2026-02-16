import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  Camera, 
  Coffee,
  Info,
  CheckCircle
} from 'lucide-react';
import { sampleQuartiersForCopy } from '../data/brusselsLocal';

const ExcursionsPage = () => {
  useEffect(() => {
    document.title = 'Excursions Touristiques - Découvrez la Belgique en Bus | Location Bus Belgique';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Excursions touristiques en Belgique et Europe : Bruxelles, Bruges, Gand, Amsterdam, Paris. Circuits guidés avec transport en bus confortable.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/excursions');
  }, []);

  const excursions = [
    {
      id: 'bruxelles-city',
      title: 'Tour de Bruxelles - Patrimoine et Gourmandise',
      duration: '4 heures',
      groupSize: '15-50 personnes',
      price: 'À partir de 35€/personne',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/volvo-bus.png?updatedAt=1757936936431',
      description: 'Découvrez le centre historique de Bruxelles, la Grand Place, le Manneken-Pis et dégustez nos spécialités locales.',
      highlights: [
        'Grand Place UNESCO',
        'Palais Royal et Parc',
        'Quartier des Marolles',
        'Dégustation chocolat',
        'Pause gaufres incluse'
      ],
      included: ['Transport en bus confortable', 'Guide francophone expert', 'Entrées monuments', 'Dégustations incluses'],
      rating: 4.9,
      popular: true
    },
    {
      id: 'bruges-fairy',
      title: 'Bruges - La Venise du Nord',
      duration: '6 heures',
      groupSize: '20-60 personnes',
      price: 'À partir de 45€/personne',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/Location-Bus-Bruxelles_Post_50.png?updatedAt=1757933799045',
      description: 'Plongez dans l\'atmosphère médiévale de Bruges avec ses canaux, beffroi et architecture gothique préservée.',
      highlights: [
        'Centre historique UNESCO',
        'Croisière sur les canaux',
        'Beffroi de Bruges',
        'Musée du Chocolat',
        'Temps libre shopping'
      ],
      included: ['Transport aller-retour', 'Croisière guidée', 'Guide local', 'Entrée Beffroi', 'Plan de la ville'],
      rating: 4.8,
      popular: false
    },
    {
      id: 'gand-medieval',
      title: 'Gand - Joyau Médiéval',
      duration: '5 heures',
      groupSize: '15-50 personnes',
      price: 'À partir de 40€/personne',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/700FOI460.jpg?updatedAt=1757936831068',
      description: 'Explorez Gand, ville d\'art et d\'histoire avec son château des Comtes et sa cathédrale Saint-Bavon.',
      highlights: [
        'Château des Comtes',
        'Cathédrale Saint-Bavon',
        'Agneau mystique',
        'Quai aux Herbes',
        'Déjeuner traditionnel'
      ],
      included: ['Bus premium', 'Entrées châteaux', 'Audioguide', 'Déjeuner 3 services', 'Documentation'],
      rating: 4.7,
      popular: false
    },
    {
      id: 'amsterdam-tulips',
      title: 'Amsterdam - Canaux et Tulipes',
      duration: '10 heures',
      groupSize: '25-60 personnes',
      price: 'À partir de 75€/personne',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      description: 'Journée complète à Amsterdam : croisière sur les canaux, jardins de Keukenhof (saison) et centre historique.',
      highlights: [
        'Croisière canaux Amsterdam',
        'Jardins Keukenhof (mars-mai)',
        'Musée Van Gogh (option)',
        'Quartier Rouge (extérieur)',
        'Shopping Kalverstraat'
      ],
      included: ['Transport longue distance', 'Croisière 1h', 'Guide bilingue', 'Entrée jardins', 'Pauses prévues'],
      rating: 4.8,
      popular: true
    },
    {
      id: 'paris-lights',
      title: 'Paris - Ville Lumière Express',
      duration: '12 heures',
      groupSize: '30-60 personnes',
      price: 'À partir de 85€/personne',
      image: 'https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg?updatedAt=1750904882222',
      description: 'Découverte express de Paris : Tour Eiffel, Champs-Élysées, Montmartre et croisière Seine.',
      highlights: [
        'Tour Eiffel (2ème étage)',
        'Arc de Triomphe',
        'Montmartre et Sacré-Cœur',
        'Croisière Seine commentée',
        'Déjeuner parisien'
      ],
      included: ['Bus grand tourisme', 'Tous billets inclus', 'Croisière Seine', 'Déjeuner restaurant', 'Guide expert'],
      rating: 4.9,
      popular: false
    },
    {
      id: 'ardennes-nature',
      title: 'Ardennes Belges - Nature et Châteaux',
      duration: '8 heures',
      groupSize: '20-50 personnes',
      price: 'À partir de 55€/personne',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/Imagens-de-Bus-nuit.png?updatedAt=1757936830748',
      description: 'Escapade nature dans les Ardennes : château de Bouillon, Dinant et vallée de la Meuse.',
      highlights: [
        'Château fort de Bouillon',
        'Dinant et sa citadelle',
        'Vallée de la Meuse',
        'Dégustation bière locale',
        'Paysages pittoresques'
      ],
      included: ['Transport confortable', 'Entrées monuments', 'Dégustation brasserie', 'Guide nature', 'Photos souvenirs'],
      rating: 4.6,
      popular: false
    }
  ];

  const excursionTypes = [
    {
      icon: Camera,
      title: 'Tours Photographiques',
      description: 'Circuits spécialement conçus pour les amateurs de photographie avec arrêts privilégiés.'
    },
    {
      icon: Coffee,
      title: 'Gastronomie & Dégustation',
      description: 'Découverte culinaire avec visites de brasseries, chocolateries et restaurants typiques.'
    },
    {
      icon: Info,
      title: 'Patrimoine & Culture',
      description: 'Visites guidées approfondies des sites historiques et culturels avec experts locaux.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Excursions
              <span className="block text-teal-400">Touristiques</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez les merveilles de la Belgique et de l'Europe avec nos circuits 
              guidés en bus confortable. Départs depuis Bruxelles : {sampleQuartiersForCopy.join(', ')}. Devis gratuit sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Excursion Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types d'Excursions Bruxelles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des circuits adaptés à tous les goûts et centres d'intérêt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {excursionTypes.map((type, index) => (
              <div key={index} className="text-center group">
                <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <type.icon className="text-teal-600" size={36} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h4>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excursions Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Excursions Populaires Bruxelles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Circuits soigneusement sélectionnés pour vous offrir le meilleur de chaque destination
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {excursions.map((excursion, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={excursion.image} 
                    alt={`${excursion.title} - Excursion guidée ${excursion.duration} avec transport bus confortable Location Bus Belgique`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {excursion.popular && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Populaire
                      </span>
                    )}
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="text-yellow-500 mr-1" size={16} />
                      <span className="text-gray-900 text-sm font-medium">{excursion.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 bg-teal-500 text-white px-4 py-2 rounded-lg font-bold">
                    {excursion.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{excursion.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{excursion.description}</p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="text-teal-500 mr-2" size={18} />
                      <span className="text-sm">{excursion.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="text-teal-500 mr-2" size={18} />
                      <span className="text-sm">{excursion.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="text-teal-500 mr-2" size={18} />
                      <span className="text-sm">Guide inclus</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Points forts de l'excursion</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {excursion.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Inclus dans le prix</h4>
                    <div className="space-y-2">
                      {excursion.included.map((item, iIndex) => (
                        <div key={iIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contactez-nous"
                      className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center flex-1"
                    >
                      Réserver Maintenant
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                    <Link
                      to="/services"
                      className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
                    >
                      Nos Services
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Excursions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excursions Sur Mesure Bruxelles
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vous avez une destination particulière en tête ? Nous créons des excursions 
                personnalisées selon vos souhaits, votre budget et vos centres d'intérêt. Notre <Link to="/qui-sommes-nous" className="text-teal-600 hover:text-teal-700 font-semibold">équipe expérimentée</Link> vous accompagne dans la conception de votre itinéraire.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Itinéraire Personnalisé</h4>
                    <p className="text-gray-600">Conception d'un parcours unique adapté à vos préférences et contraintes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Guide Spécialisé</h4>
                    <p className="text-gray-600">Guide expert dans votre domaine d'intérêt : histoire, art, gastronomie, nature.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Flexibilité Totale</h4>
                    <p className="text-gray-600">Durée, horaires et programme modifiables selon vos besoins spécifiques.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contactez-nous"
                className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Demander un Devis Personnalisé
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Groupe de touristes profitant d'une excursion personnalisée en Europe avec bus confortable Location Bus Belgique"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Services Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Voyagez en Tout Confort Bruxelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toutes nos excursions sont assurées avec notre <Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">flotte de véhicules modernes et confortables</Link>, équipés des dernières technologies pour votre bien-être.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-teal-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Transport Premium Inclus</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tous nos circuits incluent le transport en <Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">bus premium</Link> avec climatisation, sièges confortables et équipements modernes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-teal-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Services Complémentaires</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Découvrez nos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">services de transport</Link> pour vos autres besoins : transferts aéroport, événements d'entreprise et plus.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-teal-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Guides & Conseils</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Consultez notre <Link to="/blog" className="text-teal-600 hover:text-teal-700 font-semibold">blog</Link> pour des conseils de voyage, guides de destinations et astuces pour préparer vos excursions.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl border-2 border-green-200">
            <div className="flex items-start">
              <CheckCircle className="text-green-600 mr-4 mt-1 flex-shrink-0" size={32} />
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Engagement Environnemental</h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Notre flotte respecte les <Link to="/lez-bruxelles" className="text-teal-600 hover:text-teal-700 font-semibold">normes LEZ Bruxelles 2026</Link> et les réglementations européennes les plus strictes. En voyageant en groupe avec nos bus, vous participez à la réduction de l'empreinte carbone des déplacements touristiques.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span>Motorisation Euro 6 sur toute notre flotte</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span>Émissions réduites par passager comparé aux véhicules individuels</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span>Accès garanti à toutes les zones à faibles émissions européennes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Réservez Votre Prochaine Aventure Bruxelles
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Devis gratuit sans engagement, tarifs transparents. Réponse sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contactez-nous"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Demander un devis personnalisé pour une excursion
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:+3223420734"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              Conseils Personnalisés
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExcursionsPage;