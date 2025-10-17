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
  Users
} from 'lucide-react';

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
    canonical.setAttribute('href', 'https://location-bus.be/contact');
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
              Notre équipe est à votre disposition pour vous accompagner dans vos projets 
              de transport. Devis gratuit et conseils personnalisés garantis !
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
                Demande de Devis Gratuit
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Remplissez ce formulaire pour recevoir votre devis personnalisé sous 24h. 
                Tous les champs marqués * sont obligatoires. Consultez nos <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold">différents services</Link> pour mieux définir vos besoins.
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
                concernant votre demande de transport.
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
                      <p className="text-gray-600 text-sm">Réponse rapide et détaillée à toutes vos demandes. Découvrez <Link to="/about" className="text-teal-700 hover:text-teal-800 font-medium">notre engagement qualité</Link>.</p>
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
                      <p className="text-gray-600 text-sm">Conseils experts et solutions sur mesure. Consultez notre <Link to="/fleet" className="text-teal-700 hover:text-teal-800 font-medium">gamme de véhicules</Link> disponibles.</p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Combien de temps à l'avance dois-je réserver ?",
                answer: "Nous recommandons de réserver au moins 48h à l'avance pour garantir la disponibilité. Pour les services d'urgence, contactez-nous directement par téléphone."
              },
              {
                question: "Vos tarifs incluent-ils les frais de carburant ?",
                answer: "Oui, nos tarifs sont tout compris : carburant, péages, assurances, chauffeur professionnel. Aucun supplément caché."
              },
              {
                question: "Puis-je modifier ma réservation ?",
                answer: "Les modifications sont possibles jusqu'à 24h avant le départ, sous réserve de disponibilité et sans frais supplémentaires."
              },
              {
                question: "Que se passe-t-il en cas de panne ?",
                answer: "Nous disposons d'un service de dépannage 24h/24 et de véhicules de remplacement pour assurer la continuité de votre transport."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;