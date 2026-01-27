import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Building2, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Star
} from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Nos Services - Location Bus avec Chauffeur Bruxelles | Location Bus Belgique';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Services de location de bus avec chauffeur : transferts aéroport, transport entreprise, voyages scolaires, événements. Devis gratuit à Bruxelles.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/services');
  }, []);

  const services = [
    {
      icon: Plane,
      title: 'Transferts Aéroport',
      description: 'Service de transfert professionnel vers tous les aéroports belges et européens.',
      features: [
        'Suivi des vols en temps réel',
        'Chauffeur avec panneau nominatif',
        'Service 24h/24, 7j/7',
        'Véhicules premium pour VIP'
      ],
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/Afbeelding-van-WhatsApp-op-2024-03-05-om-15.24.35_2f27af2b.jpg?updatedAt=1757933904450',
      relatedLinks: [
        { text: 'Voir notre flotte premium', url: '/fleet' },
        { text: 'Demander un devis', url: '/contact' }
      ]
    },
    {
      icon: Building2,
      title: 'Transport d\'Entreprise',
      description: 'Solutions de transport pour vos événements professionnels et déplacements d\'équipe.',
      features: [
        'Séminaires et conférences',
        'Team building et sorties',
        'Transferts d\'employés',
        'Service régulier sur mesure'
      ],
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/volvo-bus-in-the-road.jpg?updatedAt=1757936496400',
      relatedLinks: [
        { text: 'Découvrir nos excursions', url: '/excursions' }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Transport Scolaire',
      description: 'Transport sécurisé pour excursions scolaires et sorties éducatives.',
      features: [
        'Conducteurs formés transport scolaire',
        'Véhicules aux normes sécurité',
        'Assurance spécialisée',
        'Accompagnement pédagogique'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      relatedLinks: [
        { text: 'En savoir plus sur notre équipe', url: '/about' }
      ]
    },
    {
      icon: Calendar,
      title: 'Événements Privés',
      description: 'Transport pour mariages, anniversaires, célébrations familiales.',
      features: [
        'Décoration personnalisée',
        'Service champagne disponible',
        'Musique et animations',
        'Photos souvenirs incluses'
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2099&q=80',
      relatedLinks: [
        { text: 'Planifier votre événement', url: '/contact' }
      ]
    },
    {
      icon: MapPin,
      title: 'Tours Touristiques',
      description: 'Découvrez la Belgique et l\'Europe avec nos circuits personnalisés.',
      features: [
        'Guide touristique professionnel',
        'Itinéraires sur mesure',
        'Arrêts photos inclus',
        'Documentation multilingue'
      ],
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/DM_03242016_0160-scaled.jpg?updatedAt=1757936713631',
      relatedLinks: [
        { text: 'Voir toutes nos excursions', url: '/excursions' }
      ]
    },
    {
      icon: Clock,
      title: 'Service Express',
      description: 'Transport d\'urgence et service express 24h/24 pour vos besoins imprévus.',
      features: [
        'Disponibilité immédiate',
        'Tarification transparente',
        'Suivi GPS en temps réel',
        'Service d\'urgence médical'
      ],
      image: 'https://ik.imagekit.io/by733ltn6/location-bus/1888944-scaled.jpg?updatedAt=1757936645948',
      relatedLinks: [
        { text: 'Contact urgence 24h/24', url: '/contact' }
      ]
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: 'Conducteurs Expérimentés',
      description: 'Tous nos chauffeurs sont certifiés, expérimentés et parlent plusieurs langues.'
    },
    {
      icon: Shield,
      title: 'Assurance Complète',
      description: 'Couverture d\'assurance maximale pour votre sécurité et votre tranquillité d\'esprit.'
    },
    {
      icon: Star,
      title: 'Service Premium',
      description: 'Attention aux détails, ponctualité et service client exceptionnel garanti.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos Services de
              <span className="block text-teal-400">Transport Premium</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Des solutions de transport personnalisées pour tous vos besoins professionnels 
              et privés avec un service d'excellence reconnu à Bruxelles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une Gamme Complète de Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Que ce soit pour un déplacement professionnel, un événement privé ou une excursion touristique, 
              nous avons la solution adaptée à vos besoins.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Service professionnel Location Bus Belgique avec véhicules modernes et chauffeurs expérimentés`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 left-6 bg-teal-500 p-3 rounded-xl">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Internal Links */}
                  {service.relatedLinks && service.relatedLinks.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-900 mb-3">Liens utiles :</p>
                      <div className="flex flex-wrap gap-3">
                        {service.relatedLinks.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.url}
                            className="text-teal-600 hover:text-teal-700 text-sm font-medium hover:underline"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Location Bus Belgique ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plus qu'un simple service de transport, nous offrons une expérience complète 
              basée sur l'excellence et la satisfaction client.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <advantage.icon className="text-teal-600" size={36} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h4>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">
              Service Disponible 24h/24, 7j/7
            </h3>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Notre équipe est toujours prête à répondre à vos demandes, même en urgence. 
              Contactez-nous pour un devis personnalisé et gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center min-h-[48px]"
              >
                Demander un Devis
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+3223420734"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 inline-flex items-center justify-center min-h-[48px]"
              >
                +32 2 342 07 34
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et transparent pour votre tranquillité d'esprit
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contactez-nous', description: 'Appelez ou remplissez notre formulaire en ligne' },
              { step: '02', title: 'Devis gratuit', description: 'Recevez votre devis personnalisé sous 24h' },
              { step: '03', title: 'Confirmation', description: 'Validez votre réservation en toute sécurité' },
              { step: '04', title: 'Transport', description: 'Profitez d\'un service de qualité exceptionnelle' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-teal-200 -translate-x-8" />
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;