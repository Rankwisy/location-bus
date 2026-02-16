import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Calendar,
  Users,
  Star,
  Route,
  Euro,
  Headphones,
  Leaf,
  TrendingUp
} from 'lucide-react';
import { sampleCommunesForCopy } from '../data/brusselsLocal';

/** FAQ générale + FAQ Tarifs & Devis (pour schema FAQPage et affichage) */
const contactFaqData = [
  { question: "Combien de temps à l'avance dois-je réserver ?", answer: "Nous recommandons de réserver au moins 48h à l'avance pour garantir la disponibilité. Pour les services d'urgence, contactez-nous directement par téléphone." },
  { question: "Vos tarifs incluent-ils les frais de carburant ?", answer: "Oui, nos tarifs sont tout compris : carburant, péages, assurances, chauffeur professionnel. Aucun supplément caché. Consultez nos conditions générales de vente pour plus de détails." },
  { question: "Puis-je modifier ma réservation ?", answer: "Les modifications sont possibles jusqu'à 24h avant le départ, sous réserve de disponibilité et sans frais supplémentaires. Voir notre politique de modification dans les CGV." },
  { question: "Vos véhicules respectent-ils les normes environnementales ?", answer: "Absolument ! Toute notre flotte est conforme aux normes LEZ Bruxelles 2026 et aux standards européens." },
  { question: "Quel est le prix d'une location de bus avec chauffeur à Bruxelles ?", answer: "Le tarif dépend du type de véhicule (minibus 19 places, bus 50 ou 60 places), de la durée et du trajet. Demandez un devis gratuit pour un prix personnalisé." },
  { question: "Comment est calculé le tarif d'un transfert en minibus ?", answer: "Nous prenons en compte la distance, la durée, le nombre de passagers et les options (aéroport, nuit, week-end). Le devis détaille tout ; aucun frais caché." },
  { question: "Le devis est-il gratuit et sans engagement ?", answer: "Oui. Votre devis est gratuit et sans engagement. Vous ne payez qu'après acceptation du devis et confirmation de réservation." },
  { question: "Qu'est-ce qui est inclus dans le prix (carburant, péages, chauffeur) ?", answer: "Sont inclus : véhicule, chauffeur professionnel, carburant, péages et assurances. Les suppléments éventuels (nuit, aéroport) sont indiqués sur le devis." },
  { question: "Comment obtenir un devis rapidement ?", answer: "Remplissez le formulaire sur cette page ou appelez-nous. Nous vous répondons sous 24h avec un devis personnalisé." },
  { question: "Y a-t-il des suppléments (nuit, week-end, aéroport) ?", answer: "Certains créneaux (départ très tôt, nuit, aéroport) peuvent donner lieu à un supplément indiqué clairement sur le devis. Nos CGV détaillent les cas." }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    passengers: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    document.title = 'Contact - Demande de Devis Bus avec Chauffeur | Location Bus Belgique';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contactez Location Bus Belgique pour un devis personnalisé. Service client disponible 7j/7. Réponse rapide garantie sous 24h. Bruxelles, Belgique.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://location-bus.be/contactez-nous');
  }, []);

  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: contactFaqData.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        passengers: '',
        message: ''
      });
      setFormStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+32 2 342 07 34', 'Disponible 7j/7'],
      action: { text: 'Appeler maintenant', href: 'tel:+3223420734' }
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@location-bus.be', 'Réponse sous 24h'],
      action: { text: 'Envoyer un email', href: 'mailto:info@location-bus.be' }
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Avenue Herrmann Debroux 54', '1160 Brussels, Belgique'],
      action: { text: 'Voir sur la carte', href: 'https://g.page/r/CQZzLb5dbWutEAE' }
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Dim : 09:00 - 19:00', 'Service urgence 24h/24'],
      action: null
    }
  ];

  const services = [
    'Transfert aéroport',
    'Transport d\'entreprise',
    'Excursion touristique',
    'Mariage / Événement privé',
    'Transport scolaire',
    'Service régulier',
    'Autre (préciser dans le message)'
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Véhicules haut de gamme pour chaque besoin',
      description: 'Notre flotte moderne s\'adapte à toutes les exigences avec équipements premium : climatisation, wifi, sièges ergonomiques, audio/vidéo HD.'
    },
    {
      icon: Users,
      title: 'Chauffeurs professionnels multilingues',
      description: 'Chauffeurs qualifiés, ponctuels et courtois parlant FR, EN, NL, ES avec connaissance approfondie de Bruxelles et ses environs.'
    },
    {
      icon: Route,
      title: 'Flexibilité et circuits sur-mesure',
      description: 'Itinéraires personnalisés pour groupes, entreprises et agences. Chaque circuit adapté à vos besoins spécifiques.'
    },
    {
      icon: Euro,
      title: 'Tarifs transparents et compétitifs',
      description: 'Devis clairs sans frais cachés. Prix tout inclus : véhicule, chauffeur, carburant, assurances. Aucune surprise.'
    },
    {
      icon: Headphones,
      title: 'Réactivité et accompagnement personnalisé',
      description: 'Interlocuteur dédié qui vous accompagne du devis à la réalisation. Réponse en moins de 24h, conseils experts.'
    },
    {
      icon: Leaf,
      title: 'Respect de l\'environnement',
      description: 'Flotte à émissions réduites, conformité aux normes européennes. Transport collectif pour réduire l\'empreinte carbone.'
    },
    {
      icon: TrendingUp,
      title: 'Satisfaction client prouvée',
      description: 'Taux de satisfaction supérieur aux standards du marché. Qualité irréprochable et attention aux détails.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-teal-600 to-teal-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-teal-800/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Devis gratuit sans engagement, réponse sous 24h. Tarifs transparents, aucun frais caché. 
              Service dans toute la Région : {sampleCommunesForCopy.join(', ')}.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <info.icon className="text-teal-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h4>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className={`${dIndex === 0 ? 'font-semibold text-gray-900' : 'text-gray-600 text-sm'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action.href}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-sm"
                    {...(info.action.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {info.action.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Demande de Devis Gratuit Bruxelles
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Remplissez ce formulaire pour recevoir votre devis personnalisé sous 24h. 
                Tous les champs marqués * sont obligatoires. Consultez nos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">services transport bus Bruxelles</Link> pour mieux définir vos besoins.
              </p>

              {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 flex items-center">
                  <CheckCircle className="mr-3" size={24} />
                  <div>
                    <p className="font-semibold">Merci pour votre demande !</p>
                    <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="flex items-center text-gray-700 font-semibold mb-2">
                      <User size={18} className="mr-2 text-teal-600" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-base min-h-[48px]"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="flex items-center text-gray-700 font-semibold mb-2">
                      <Mail size={18} className="mr-2 text-teal-600" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-base min-h-[48px]"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="flex items-center text-gray-700 font-semibold mb-2">
                      <Phone size={18} className="mr-2 text-teal-600" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-base min-h-[48px]"
                      placeholder="+32 xxx xx xx xx"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="flex items-center text-gray-700 font-semibold mb-2">
                      <MessageSquare size={18} className="mr-2 text-teal-600" />
                      Type de service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-base min-h-[48px]"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="flex items-center text-gray-700 font-semibold mb-2">
                      <Calendar size={18} className="mr-2 text-teal-600" />
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-base min-h-[48px]"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label htmlFor="passengers" className="flex items-center text-gray-700 font-semibold mb-2">
                      <Users size={18} className="mr-2 text-teal-600" />
                      Nombre de passagers
                    </label>
                    <input
                      type="number"
                      id="passengers"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors text-base min-h-[48px]"
                      placeholder="Ex: 25"
                      min="1"
                      max="60"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center text-gray-700 font-semibold mb-2">
                    <MessageSquare size={18} className="mr-2 text-teal-600" />
                    Message détaillé *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical text-base"
                    placeholder="Décrivez votre projet de transport : itinéraire, horaires, besoins spécifiques..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center min-h-[48px]"
                >
                  <Send className="mr-2" size={20} />
                  Envoyer ma Demande
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-4">
                En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe 
                concernant votre demande de transport. Vous acceptez également notre{' '}
                <Link to="/politique-confidentialite" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">Politique de confidentialité</Link>
                {' '}et nos{' '}
                <Link to="/conditions-generales-vente" className="text-teal-600 hover:text-teal-700 font-medium hover:underline">Conditions générales de vente</Link>.
              </p>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Localisation</h3>
                <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6234567890123!2d4.407723!3d50.828611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3f123456789%3A0xabcdef123456!2sAvenue%20Herrmann%20Debroux%2054%2C%201160%20Auderghem%2C%20Belgium!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Bus Belgique - Adresse"
                  />
                </div>
              </div>

              <div className="bg-teal-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Pourquoi Nous Choisir ?</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h5 className="font-semibold text-gray-900">Devis gratuit sous 24h</h5>
                      <p className="text-gray-600 text-sm">Réponse rapide et détaillée à toutes vos demandes. Découvrez <Link to="/qui-sommes-nous" className="text-teal-700 hover:text-teal-800 font-medium">notre engagement qualité</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h5 className="font-semibold text-gray-900">Tarifs transparents</h5>
                      <p className="text-gray-600 text-sm">Aucun coût caché, prix fixe confirmé par écrit</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h5 className="font-semibold text-gray-900">Service personnalisé</h5>
                      <p className="text-gray-600 text-sm">Conseils experts et solutions sur mesure. Consultez notre <Link to="/flotte" className="text-teal-700 hover:text-teal-800 font-medium">gamme de véhicules</Link> disponibles.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h5 className="font-semibold text-gray-900">Disponibilité 7j/7</h5>
                      <p className="text-gray-600 text-sm">Équipe disponible même le weekend et jours fériés</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">Besoin d'une Réponse Immédiate ?</h4>
                <p className="mb-6 text-gray-200">
                  Notre équipe commerciale est disponible par téléphone pour répondre 
                  à toutes vos questions et établir un devis en direct.
                </p>
                <a
                  href="tel:+3223420734"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 inline-flex items-center"
                >
                  <Phone className="mr-2" size={20} />
                  Appeler Maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Location-Bus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir location-bus Bruxelles ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dans le secteur dynamique de la location d'autocars à Bruxelles, location-bus s'impose
              comme le partenaire de confiance pour tous vos déplacements collectifs. Découvrez nos 7 avantages exclusifs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-teal-100"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <item.icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-12 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-6">
              L'Excellence du Transport Collectif à Bruxelles
            </h3>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              En choisissant location-bus, vous bénéficiez d'une expérience de transport premium
              qui allie confort, sécurité et service personnalisé. Rejoignez les milliers de clients
              satisfaits qui nous font confiance !
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <CheckCircle className="mx-auto mb-3 text-teal-200" size={32} />
                <p className="font-semibold">Véhicules Premium</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <CheckCircle className="mx-auto mb-3 text-teal-200" size={32} />
                <p className="font-semibold">Chauffeurs Experts</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <CheckCircle className="mx-auto mb-3 text-teal-200" size={32} />
                <p className="font-semibold">Tarifs Transparents</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <CheckCircle className="mx-auto mb-3 text-teal-200" size={32} />
                <p className="font-semibold">Service 7j/7</p>
              </div>
            </div>
            <p className="text-2xl font-bold mt-8 mb-4">
              Bruxelles mérite l'excellence du transport collectif !
            </p>
            <p className="text-teal-100 mb-6">
              Confiez vos voyages à location-bus et vivez la différence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section (générale + Tarifs & Devis) */}
      <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes Bruxelles
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos services et nos tarifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {contactFaqData.slice(0, 4).map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                {index === 1 ? (
                  <p className="text-gray-600 leading-relaxed">Oui, nos tarifs sont tout compris : carburant, péages, assurances, chauffeur professionnel. Aucun supplément caché. Consultez nos <Link to="/conditions-generales-vente" className="text-teal-600 hover:text-teal-700 font-semibold">conditions générales de vente</Link> pour plus de détails.</p>
                ) : index === 2 ? (
                  <p className="text-gray-600 leading-relaxed">Les modifications sont possibles jusqu'à 24h avant le départ, sous réserve de disponibilité et sans frais supplémentaires. Voir notre <Link to="/conditions-generales-vente" className="text-teal-600 hover:text-teal-700 font-semibold">politique de modification</Link>.</p>
                ) : index === 3 ? (
                  <p className="text-gray-600 leading-relaxed">Absolument ! Toute notre <Link to="/flotte" className="text-teal-600 hover:text-teal-700 font-semibold">flotte moderne</Link> est conforme aux <Link to="/lez-bruxelles" className="text-teal-600 hover:text-teal-700 font-semibold">normes LEZ Bruxelles 2026</Link> et aux standards environnementaux européens.</p>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center max-w-4xl mx-auto">FAQ Tarifs & Devis</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {contactFaqData.slice(4).map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.question.includes('Qu\'est-ce qui est inclus') ? (
                    <>Sont inclus : véhicule, chauffeur professionnel, carburant, péages et assurances. Les suppléments éventuels sont indiqués sur le devis. Consultez nos <Link to="/conditions-generales-vente" className="text-teal-600 hover:text-teal-700 font-semibold">conditions générales de vente</Link> pour le détail.</>
                  ) : faq.question.includes('Comment obtenir un devis') ? (
                    <>Remplissez le <Link to="/contactez-nous" className="text-teal-600 hover:text-teal-700 font-semibold">formulaire de demande de devis</Link> sur cette page ou appelez-nous. Nous vous répondons sous 24h avec un devis personnalisé.</>
                  ) : faq.question.includes('suppléments') ? (
                    <>Certains créneaux (départ très tôt, nuit, aéroport) peuvent donner lieu à un supplément indiqué clairement sur le devis. Nos <Link to="/conditions-generales-vente" className="text-teal-600 hover:text-teal-700 font-semibold">CGV</Link> détaillent les cas.</>
                  ) : (
                    faq.answer
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Resources Links */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ressources Utiles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-teal-600 mr-2" size={20} />
                    Explorez Nos Services
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li>
                      <Link to="/services" className="text-teal-600 hover:text-teal-700 hover:underline">
                        Transferts aéroport et transport entreprise
                      </Link>
                    </li>
                    <li>
                      <Link to="/excursions" className="text-teal-600 hover:text-teal-700 hover:underline">
                        Excursions touristiques en Belgique et Europe
                      </Link>
                    </li>
                    <li>
                      <Link to="/flotte" className="text-teal-600 hover:text-teal-700 hover:underline">
                        Notre flotte : minibus, bus et autocars premium
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-teal-600 mr-2" size={20} />
                    Informations Complémentaires
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li>
                      <Link to="/qui-sommes-nous" className="text-teal-600 hover:text-teal-700 hover:underline">
                        Qui sommes-nous : expertise transport Bruxelles
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-teal-600 hover:text-teal-700 hover:underline">
                        Blog : conseils et actualités transport
                      </Link>
                    </li>
                    <li>
                      <Link to="/politique-confidentialite" className="text-teal-600 hover:text-teal-700 hover:underline">
                        Protection de vos données personnelles
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;