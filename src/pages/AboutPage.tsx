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
  Zap
} from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'À Propos - Location Bus Belgique | Notre Histoire et Expertise';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez Location Bus Belgique : 15 ans d\'expérience, flotte moderne, chauffeurs professionnels. Votre partenaire transport de confiance à Bruxelles.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/about');
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
              <span className="block text-teal-400">Location Bus Belgique</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2008 à Bruxelles, Location Bus Belgique est née de la passion 
                  de son fondateur pour le transport et le service client d'excellence. 
                  Partant d'une petite <Link to="/fleet" className="text-teal-600 hover:text-teal-700 font-semibold">flotte de 3 véhicules</Link>, nous avons progressivement développé notre entreprise pour devenir l'un des acteurs majeurs du transport de personnes en Belgique.
                </p>
                <p>
                  Notre croissance s'est construite sur des valeurs solides : la sécurité, 
                  la ponctualité, le confort et un service personnalisé. Chaque client est 
                  unique, et nous adaptons nos prestations à ses besoins spécifiques, 
                  qu'il s'agisse d'un <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">transfert aéroport</Link>, d'une <Link to="/excursions" className="text-teal-600 hover:text-teal-700 font-semibold">excursion touristique</Link> ou d'un voyage d'entreprise.
                </p>
                <p>
                  Aujourd'hui, avec plus de <Link to="/fleet" className="text-teal-600 hover:text-teal-700 font-semibold">50 véhicules dans notre flotte</Link> et une équipe 
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
              Nos Chiffres Clés
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
              Nos Valeurs
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

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe Dirigeante
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Certifications et Agréments
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
              Notre Mission
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
            Prêt à Voyager avec Nous ?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de clients qui nous font confiance. 
            Contactez-nous pour découvrir comment nous pouvons répondre à vos besoins de transport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Nous Contacter
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/fleet"
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