import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, Wifi, Coffee, Snowflake, Volume2, Usb as UsbPort, Shield } from 'lucide-react';

const FleetPage = () => {
  useEffect(() => {
    document.title = 'Notre Flotte - Bus et Minibus de Luxe avec Chauffeur | Location Bus Belgique';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez notre flotte de bus et minibus de luxe : 19, 50 et 60 places. Véhicules modernes, confortables et équipés. Location avec chauffeur à Bruxelles.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/flotte');
  }, []);

  const fleet = [
    {
      name: 'Minibus Premium',
      capacity: '19 Places',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/sp6.jpg',
      description: 'Parfait pour les groupes moyens, transferts VIP et déplacements personnalisés.',
      features: [
        'Climatisation automatique',
        'Sièges en cuir inclinables',
        'Ceintures de sécurité 3 points',
        'Système audio moderne',
        'Vitres teintées',
        'Espace bagages optimisé'
      ],
      specifications: {
        'Longueur': '8.5m',
        'Largeur': '2.35m',
        'Hauteur': '3.2m',
        'Motorisation': 'Euro 6',
        'Transmission': 'Automatique',
        'Consommation': '12L/100km'
      },
      idealFor: ['Transferts aéroport', 'Réunions d\'entreprise', 'Sorties famille', 'Tours privés'],
      popular: false
    },
    {
      name: 'Autocar Confort',
      capacity: '50 Places',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/70.png',
      description: 'Solution idéale pour excursions, événements d\'entreprise et voyages de groupe.',
      features: [
        'Prises USB à chaque rangée',
        'Microphone et système sonore',
        'Réfrigérateur embarqué',
        'Machine à café automatique',
        'Toilettes équipées',
        'Éclairage LED d\'ambiance',
        'Wi-Fi haut débit',
        'Écrans individuels disponibles'
      ],
      specifications: {
        'Longueur': '12m',
        'Largeur': '2.55m',
        'Hauteur': '3.8m',
        'Motorisation': 'Euro 6',
        'Transmission': 'Automatique',
        'Consommation': '28L/100km'
      },
      idealFor: ['Excursions touristiques', 'Voyages d\'entreprise', 'Événements sportifs', 'Séminaires'],
      popular: true
    },
    {
      name: 'Autocar Premium',
      capacity: '60 Places',
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/volvo-bus.png',
      description: 'Le summum du confort pour grands groupes avec équipements haut de gamme.',
      features: [
        'Sièges grand confort inclinables',
        'Prises électriques individuelles',
        'Système multimédia HD',
        'Bar service disponible',
        'Toilettes spacieuses',
        'Rangements individuels',
        'Système de navigation GPS',
        'Caméras de sécurité embarquées'
      ],
      specifications: {
        'Longueur': '15m',
        'Largeur': '2.55m',
        'Hauteur': '4m',
        'Motorisation': 'Euro 6',
        'Transmission': 'Automatique',
        'Consommation': '32L/100km'
      },
      idealFor: ['Voyages longue distance', 'Groupes importants', 'Tours européens', 'Conventions'],
      popular: false
    }
  ];

  const equipmentIcons = {
    'Climatisation': Snowflake,
    'Audio': Volume2,
    'USB': UsbPort,
    'Café': Coffee,
    'Wi-Fi': Wifi,
    'Sécurité': Shield
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Notre Flotte de
              <span className="block text-teal-400">Véhicules Premium</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Des véhicules modernes et confortables, entretenus selon les plus hauts standards 
              de sécurité et de qualité pour votre tranquillité d'esprit.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Des Véhicules pour Tous Vos Besoins
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Que vous transportiez 19 ou 60 personnes, notre flotte moderne vous garantit 
              confort, sécurité et prestations haut de gamme.
            </p>
          </div>

          {fleet.map((vehicle, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.name} ${vehicle.capacity} - Véhicule moderne Location Bus Belgique équipé climatisation sièges cuir`}
                      className="w-full rounded-2xl shadow-2xl"
                    />
                    {vehicle.popular && (
                      <div className="absolute top-6 right-6 bg-teal-400 text-gray-900 px-4 py-2 rounded-full font-bold">
                        Le Plus Populaire
                      </div>
                    )}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <div className="flex items-center text-gray-900 font-bold">
                        <Users size={20} className="mr-2 text-teal-600" />
                        {vehicle.capacity}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{vehicle.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Équipements Inclus</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Tous nos véhicules bénéficient d'un <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">service premium</Link> avec chauffeur professionnel.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {vehicle.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center">
                          <CheckCircle className="text-teal-500 mr-3 flex-shrink-0" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Spécifications Techniques</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {Object.entries(vehicle.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-700">{key}</span>
                          <span className="text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Idéal Pour</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Découvrez nos <Link to="/excursions" className="text-teal-600 hover:text-teal-700 font-semibold">excursions touristiques</Link> et nos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">solutions entreprise</Link>.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.idealFor.map((use, uIndex) => (
                        <span key={uIndex} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contactez-nous"
                    className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 transform hover:scale-105"
                  >
                    Réserver ce Véhicule
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Équipements de Série
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tous nos véhicules sont équipés des dernières technologies pour votre confort et votre sécurité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Snowflake,
                title: 'Climatisation',
                description: 'Système de climatisation automatique avec contrôle de température individuel.'
              },
              {
                icon: UsbPort,
                title: 'Prises USB & 220V',
                description: 'Rechargez vos appareils avec nos prises USB et 220V disponibles à chaque rangée.'
              },
              {
                icon: Wifi,
                title: 'Wi-Fi Gratuit',
                description: 'Connexion internet haut débit gratuite pour rester connecté pendant votre voyage.'
              },
              {
                icon: Volume2,
                title: 'Système Audio HD',
                description: 'Système audio haute définition avec microphone pour guide ou annonces.'
              },
              {
                icon: Coffee,
                title: 'Service Boissons',
                description: 'Machine à café et réfrigérateur pour vos boissons et collations.'
              },
              {
                icon: Shield,
                title: 'Sécurité Renforcée',
                description: 'Ceintures 3 points, système ABS, caméras de surveillance et GPS tracking.'
              }
            ].map((equipment, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <equipment.icon className="text-teal-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{equipment.title}</h4>
                <p className="text-gray-600 leading-relaxed">{equipment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Maintenance et Sécurité
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                La sécurité de nos passagers est notre priorité absolue. Découvrez <Link to="/qui-sommes-nous" className="text-teal-600 hover:text-teal-700 font-semibold">notre histoire et nos certifications</Link>. Tous nos véhicules suivent un programme de maintenance strict et sont contrôlés régulièrement.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Contrôles Techniques Réguliers</h4>
                    <p className="text-gray-600">Inspections mécaniques complètes tous les 15 000 km par des professionnels certifiés.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Certifications de Sécurité</h4>
                    <p className="text-gray-600">Tous nos véhicules respectent les normes Euro 6 et possèdent toutes les certifications requises.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Nettoyage et Désinfection</h4>
                    <p className="text-gray-600">Protocole de nettoyage renforcé après chaque utilisation pour votre hygiène et sécurité. Tous nos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">services incluent ce protocole sanitaire</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1632823471564-5d9df39d85fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Mécanicien professionnel effectuant maintenance préventive sur bus moderne - Sécurité garantie Location Bus Belgique"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Compliance & Usage Guide */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Environmental Compliance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="text-green-600 mr-3" size={32} />
                Conformité Environnementale
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Toute notre flotte respecte les normes environnementales les plus strictes.
                Découvrez notre engagement pour un <Link to="/lez-bruxelles" className="text-teal-600 hover:text-teal-700 font-semibold">transport écologique conforme aux normes LEZ Bruxelles 2026</Link>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Motorisation Euro 6</h5>
                    <p className="text-gray-600 text-sm">Tous nos véhicules respectent la norme Euro 6, réduisant considérablement les émissions polluantes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Accès LEZ garanti</h5>
                    <p className="text-gray-600 text-sm">Circulation autorisée dans toutes les zones à faibles émissions de Bruxelles et d'Europe.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Transport collectif responsable</h5>
                    <p className="text-gray-600 text-sm">En choisissant le bus, vous réduisez l'empreinte carbone de vos déplacements de groupe.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guide */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="text-teal-600 mr-3" size={32} />
                Guides Pratiques
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Besoin d'aide pour choisir le bon véhicule ? Consultez nos ressources utiles pour préparer votre réservation.
              </p>
              <div className="space-y-4">
                <Link
                  to="/services"
                  className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
                >
                  <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-700">
                    Découvrez tous nos services →
                  </h5>
                  <p className="text-gray-600 text-sm">Transferts aéroport, transport entreprise, voyages scolaires et plus encore.</p>
                </Link>
                <Link
                  to="/excursions"
                  className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
                >
                  <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-700">
                    Excursions touristiques guidées →
                  </h5>
                  <p className="text-gray-600 text-sm">Découvrez nos circuits en Belgique et Europe avec guide professionnel.</p>
                </Link>
                <Link
                  to="/blog"
                  className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
                >
                  <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-700">
                    Conseils et actualités →
                  </h5>
                  <p className="text-gray-600 text-sm">Articles pratiques pour bien préparer vos déplacements en groupe.</p>
                </Link>
                <Link
                  to="/qui-sommes-nous"
                  className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
                >
                  <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-700">
                    Notre expertise et certifications →
                  </h5>
                  <p className="text-gray-600 text-sm">Découvrez notre histoire, notre équipe et nos agréments professionnels.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Réservez Votre Véhicule Maintenant
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Choisissez le véhicule parfait pour votre événement. Notre équipe vous aide 
            à sélectionner la solution optimale selon vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contactez-nous"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Demander un Devis
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:+3223420734"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;