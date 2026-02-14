import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Zap,
  Star,
  Route,
  Euro,
  Headphones,
  Leaf,
  TrendingUp
} from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    const title = 'Qui Sommes-Nous ? | Location Bus Bruxelles | 15 Ans d\'Expérience Transport';
    const description = 'Location Bus Belgique : entreprise bruxelloise spécialisée transport de groupes depuis 2008. Flotte 50+ véhicules, chauffeurs professionnels multilingues, 10000+ clients satisfaits.';
    
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://location-bus.be/qui-sommes-nous' }
    ];
    ogTags.forEach(tag => {
      let el = document.querySelector(`meta[property="${tag.property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', tag.property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });

    // Twitter Card
    const twitterTags = [
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:card', content: 'summary_large_image' }
    ];
    twitterTags.forEach(tag => {
      let el = document.querySelector(`meta[name="${tag.name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', tag.name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/qui-sommes-nous');
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'La sécurité de nos passagers est notre priorité absolue. Véhicules entretenus, chauffeurs formés et assurances complètes.'
    },
    {
      icon: Heart,
      title: 'Service Client',
      description: 'Relation client privilégiée avec une attention particulière à vos besoins spécifiques et un suivi personnalisé.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'Recherche constante de l\'excellence dans tous nos services pour dépasser vos attentes à chaque voyage.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Années d\'expérience', icon: Clock },
    { number: '50+', label: 'Véhicules dans notre flotte', icon: Users },
    { number: '10000+', label: 'Clients satisfaits', icon: Award },
    { number: '98%', label: 'Taux de satisfaction', icon: Target }
  ];

  const team = [
    {
      name: 'Mohammed Hassan',
      role: 'Directeur Général',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Plus de 15 ans d\'expérience dans le transport de personnes. Passionné par l\'excellence du service client.'
    },
    {
      name: 'Sarah Dupont',
      role: 'Responsable Opérations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Experte en logistique transport, elle coordonne tous nos déplacements avec précision et efficacité.'
    },
    {
      name: 'Jean-Pierre Martin',
      role: 'Chef d\'Équipe Chauffeurs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Responsable de la formation et de l\'encadrement de notre équipe de chauffeurs professionnels.'
    }
  ];

  const certifications = [
    'Licence de Transport de Personnes',
    'Certification ISO 9001 Qualité',
    'Agrément Transport Scolaire',
    'Assurance Responsabilité Civile Professionnelle',
    'Certification Sécurité Routière',
    'Agrément Tourisme Belgique'
  ];

  const differentiators = [
    {
      icon: Star,
      title: 'Des véhicules haut de gamme pour chaque besoin',
      description: 'Notre flotte moderne et variée s\'adapte à toutes les exigences : minibus élégants pour petits groupes, autocars grand confort pour les voyages longue distance ou bus VIP pour événements d\'entreprise et transferts aéroport. Tous nos véhicules sont équipés des dernières technologies : climatisation individuelle, wifi haut débit, sièges ergonomiques, systèmes audio et vidéo HD, toilettes à bord.'
    },
    {
      icon: Users,
      title: 'Des chauffeurs professionnels, multilingues et courtois',
      description: 'Le voyage ne se résume pas au véhicule. Nos chauffeurs qualifiés incarnent la convivialité belge, sont ponctuels, discrets, multilingues (FR, EN, NL, ES) et disposent d\'une connaissance approfondie de Bruxelles et de ses environs. Chaque chauffeur est régulièrement formé aux standards du transport de groupe, du tourisme et des exigences VIP.'
    },
    {
      icon: Route,
      title: 'Une flexibilité totale et des circuits sur-mesure',
      description: 'Location-bus propose bien plus qu\'un simple trajet. Nous concevons des itinéraires personnalisés pour les groupes, entreprises, écoles et agences. Excursion culturelle, parcours touristique Bruxelles-Europe, voyage scolaire, événement professionnel – chaque circuit est adapté à vos besoins grâce à notre écoute attentive et à notre expérience locale.'
    },
    {
      icon: Euro,
      title: 'Des tarifs transparents et compétitifs',
      description: 'Contrairement à beaucoup de nos concurrents qui multiplient les frais cachés ou surprises de dernière minute, location-bus garantit des devis rapides, clairs et sans ambiguïté. Le prix annoncé inclut tous les services essentiels : véhicule haut de gamme, chauffeur, carburant, assurances, assistance – aucune mauvaise surprise, aucune majoration inattendue.'
    },
    {
      icon: Headphones,
      title: 'Réactivité et accompagnement du devis à la réalisation',
      description: 'Confier votre projet à location-bus c\'est bénéficier d\'un interlocuteur dédié qui vous conseille, vous accompagne et assure le suivi logistique avant, pendant et après votre voyage. Demande de devis en moins de 24h, réponses claires et conseils personnalisés assurent la réussite de chaque mission, quelle que soit sa complexité.'
    },
    {
      icon: Leaf,
      title: 'Respect de l\'environnement et des normes européennes',
      description: 'Notre engagement va au-delà du transport. Location-bus utilise une flotte dont les émissions sont réduites, encourage l\'organisation de déplacements collectifs pour diminuer l\'empreinte carbone, et s\'assure de la conformité aux règlementations européennes du transport en toute transparence et sécurité.'
    },
    {
      icon: TrendingUp,
      title: 'Satisfaction client prouvée',
      description: 'Chaque témoignage, chaque retour client est analysé pour améliorer en permanence notre offre. Notre taux de satisfaction dépasse constamment les standards du marché, grâce à une qualité de service irréprochable et à une attention portée à chaque détail, du premier contact à la fin du trajet.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              À Propos de
              <span className="block text-teal-400">Location Bus Bruxelles</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Depuis plus de 15 ans, nous sommes votre partenaire de confiance pour tous 
              vos besoins de transport en Belgique et en Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire Bruxelles</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2008 à Bruxelles, Location Bus Belgique est née de la passion 
                  de son fondateur pour le transport et le service client d'excellence. 
                  Partant d'une petite <Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">flotte de 3 véhicules</Link>, nous avons progressivement développé notre entreprise pour devenir l'un des acteurs majeurs du transport de personnes en Belgique.
                </p>
                <p>
                  Notre croissance s'est construite sur des valeurs solides : la sécurité, 
                  la ponctualité, le confort et un service personnalisé. Chaque client est 
                  unique, et nous adaptons nos prestations à ses besoins spécifiques, 
                  qu'il s'agisse d'un <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">transfert aéroport</Link>, d'une <Link to="/excursions" className="text-teal-600 hover:text-teal-700 font-semibold">excursion touristique</Link> ou d'un voyage d'entreprise.
                </p>
                <p>
                  Aujourd'hui, avec plus de <Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">50 véhicules dans notre flotte</Link> et une équipe 
                  de professionnels dévoués, nous continuons à innover pour vous offrir 
                  le meilleur du transport premium.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Équipe Location Bus Belgique devant flotte moderne - 15 ans expérience transport professionnel Bruxelles"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-teal-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nos Chiffres Clés Bruxelles
            </h2>
            <p className="text-xl text-teal-100">
              Des résultats qui témoignent de notre engagement et de votre confiance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="text-white" size={36} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs Bruxelles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident nos actions quotidiennes et notre relation client
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <value.icon className="text-teal-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Location-Bus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Votre Voyage, Notre Passion : Le Choix N°1 à Bruxelles
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dans le secteur dynamique et exigeant de la location d'autocars à Bruxelles,
              location-bus s'impose comme le partenaire de confiance pour tous vos déplacements
              collectifs, touristiques, professionnels ou sur-mesure. Découvrez pourquoi choisir
              location-bus, c'est opter pour l'excellence.
            </p>
          </div>

          <div className="space-y-12">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}
              >
                <div className="lg:w-1/4 flex justify-center lg:justify-start">
                  <div className="bg-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <item.icon className="text-teal-600" size={36} />
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-50 to-teal-100 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi choisir location-bus ?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start">
                <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Véhicules haut de gamme</h4>
                  <p className="text-gray-700">Adaptés à votre projet</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Chauffeurs professionnels</h4>
                  <p className="text-gray-700">Multilingues et courtois</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Itinéraires sur-mesure</h4>
                  <p className="text-gray-700">Organisation flexible</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Tarifs transparents</h4>
                  <p className="text-gray-700">Compétitifs et sans surprise</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Réactivité et accompagnement</h4>
                  <p className="text-gray-700">Personnalisé à chaque étape</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Engagement écologique</h4>
                  <p className="text-gray-700">Conformité aux normes</p>
                </div>
              </div>
              <div className="flex items-start md:col-span-2 justify-center">
                <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Satisfaction client garantie</h4>
                  <p className="text-gray-700">Qualité et attention aux détails</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-xl text-gray-800 font-semibold mb-6">
                Bruxelles mérite l'excellence du transport collectif. Confiez vos voyages à location-bus et vivez la différence !
              </p>
              <Link
                to="/contactez-nous"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
              >
                Contactez-nous dès maintenant
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe Dirigeante Bruxelles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels expérimentés et passionnés, dédiés à votre satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} Location Bus Belgique expert transport professionnel`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Certifications et Agréments Bruxelles
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Notre engagement qualité est reconnu par de nombreuses certifications 
                officielles qui garantissent le sérieux de nos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">prestations de transport</Link>.
              </p>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-teal-500 mr-4 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Certificats et agréments officiels Location Bus Belgique - Garantie qualité sécurité transport professionnel"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Notre Mission Bruxelles
            </h2>
            <blockquote className="text-2xl text-gray-200 italic max-w-4xl mx-auto leading-relaxed mb-8">
              "Offrir à nos clients une expérience de transport exceptionnelle, 
              alliant sécurité, confort et service personnalisé, pour faire de chaque 
              déplacement un moment de sérénité et de plaisir."
            </blockquote>
            <div className="w-24 h-1 bg-teal-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cette philosophie guide chacune de nos actions et nous pousse à 
              constamment améliorer nos services pour votre satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Voyager avec Nous Bruxelles ?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de clients qui nous font confiance. 
            Contactez-nous pour découvrir comment nous pouvons répondre à vos besoins de transport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contactez-nous"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Nous Contacter
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/flotte"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              Découvrir Notre Flotte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;