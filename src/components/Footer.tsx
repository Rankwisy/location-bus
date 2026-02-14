import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <img 
              src="https://ik.imagekit.io/by733ltn6/location-bus/cropped-Logo-Location_bus-1.png?updatedAt=1757933964171" 
              alt="Location Bus Belgique - Transport premium bus et minibus avec chauffeur professionnel Bruxelles"
              className="h-16 mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Location de bus et minibus avec chauffeur à Bruxelles. Service professionnel 
              pour vos transferts d'aéroport, excursions, voyages d'entreprise et événements spéciaux.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Réseaux sociaux">
              <Link to="/contactez-nous" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center gap-2" aria-label="Nous contacter via Facebook">
                <Facebook size={24} aria-hidden />
                <span className="text-sm font-medium">Facebook</span>
              </Link>
              <Link to="/contactez-nous" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center gap-2" aria-label="Nous contacter via Twitter">
                <Twitter size={24} aria-hidden />
                <span className="text-sm font-medium">Twitter</span>
              </Link>
              <Link to="/contactez-nous" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center gap-2" aria-label="Nous contacter via Instagram">
                <Instagram size={24} aria-hidden />
                <span className="text-sm font-medium">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-6 text-teal-400">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Avenue Herrmann Debroux 54</p>
                  <p className="text-gray-300">1160 Brussels, Belgique</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-teal-400 mr-3 flex-shrink-0" />
                <a href="tel:+3223420734" className="text-gray-300 hover:text-teal-400 transition-colors">
                  +32 2 342 07 34
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-teal-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@location-bus.be" className="text-gray-300 hover:text-teal-400 transition-colors">
                  info@location-bus.be
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Services */}
          <div>
            <h2 className="text-lg font-semibold mb-6 text-teal-400">Horaires & Services</h2>
            <div className="mb-6">
              <div className="flex items-start mb-3">
                <Clock size={20} className="text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Lundi - Vendredi</p>
                  <p className="text-gray-300 text-sm">09:00 - 19:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Samedi - Dimanche</p>
                  <p className="text-gray-300 text-sm">09:00 - 19:00</p>
                </div>
              </div>
            </div>
            <nav className="space-y-2" aria-label="Navigation principale">
              <Link to="/" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Accueil
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Services de Transport
              </Link>
              <Link to="/excursions" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Excursions Touristiques
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Solutions Entreprise
              </Link>
              <Link to="/flotte" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Notre Flotte
              </Link>
              <Link to="/lez-bruxelles" className="flex items-center text-green-400 hover:text-green-300 transition-colors font-medium">
                <Leaf size={16} className="mr-2" />
                Conformité LEZ Bruxelles
              </Link>
              <Link to="/qui-sommes-nous" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Notre Expertise
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Blog
              </Link>
              <Link to="/contactez-nous" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Devis Gratuit
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* Legal & key pages - clearly accessible */}
          <p className="text-gray-500 text-xs text-center mb-4 uppercase tracking-wider" id="footer-legal-heading">
            Informations légales
          </p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6" aria-labelledby="footer-legal-heading">
            <Link to="/mentions-legales" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
              Mentions Légales
            </Link>
            <span className="text-gray-600" aria-hidden="true">|</span>
            <Link to="/politique-confidentialite" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
              Politique de Confidentialité
            </Link>
            <span className="text-gray-600" aria-hidden="true">|</span>
            <Link to="/conditions-generales-vente" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
              Conditions Générales de Vente
            </Link>
            <span className="text-gray-600" aria-hidden="true">|</span>
            <Link to="/lez-bruxelles" className="text-green-300 hover:text-green-200 transition-colors text-sm font-medium">
              Conformité LEZ
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-gray-300 text-sm text-center">
            © {new Date().getFullYear()} Location Bus Belgique. Tous droits réservés.
            <span className="mx-2">|</span>
            Développé avec passion pour un transport de qualité.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;