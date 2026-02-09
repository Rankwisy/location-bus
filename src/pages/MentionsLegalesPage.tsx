import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, FileText, Scale } from 'lucide-react';
import { setPageSEO } from '../utils/seo';

const MentionsLegalesPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Mentions Légales - Location Bus Belgique | Informations Légales et RGPD',
      description: 'Mentions légales de Location Bus Belgique : informations sur la société, propriété intellectuelle, protection des données RGPD, responsabilité et conditions d\'utilisation du site.',
      keywords: 'mentions légales, informations légales, RGPD, protection données, conditions utilisation, location bus belgique',
      ogType: 'website'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Scale className="text-teal-500 mr-4" size={40} />
              <h1 className="text-4xl font-bold text-gray-900">Mentions Légales</h1>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Conformément aux dispositions de la loi belge sur le commerce électronique et aux règlements européens,
              voici les informations légales concernant le site location-bus.be.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Building2 className="text-teal-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Informations sur l'Entreprise</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Raison Sociale</h3>
                <p>Location Bus Belgique SPRL</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Numéro d'Entreprise (BCE)</h3>
                <p>BE 0XXX.XXX.XXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Siège Social</h3>
                <p>Rue Exemple 123</p>
                <p>1000 Bruxelles, Belgique</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact</h3>
                <div className="flex items-center mb-2">
                  <Phone className="mr-2 text-teal-500" size={18} />
                  <a href="tel:+3223420734" className="text-teal-600 hover:underline">+32 2 342 07 34</a>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-teal-500" size={18} />
                  <a href="mailto:info@location-bus.be" className="text-teal-600 hover:underline">info@location-bus.be</a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Forme Juridique</h3>
                <p>Société Privée à Responsabilité Limitée (SPRL)</p>
              </div>
            </div>
          </div>

          {/* Hosting Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hébergement du Site</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
              <p><strong>Siège :</strong> 2325 3rd Street, Suite 215, San Francisco, CA 94107, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.netlify.com</a></p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <FileText className="text-teal-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Propriété Intellectuelle</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, icônes) est la propriété
                exclusive de Location Bus Belgique SPRL ou fait l'objet d'une autorisation d'utilisation.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable
                de Location Bus Belgique SPRL.
              </p>
              <p>
                Les marques, logos et signes distinctifs reproduits sur ce site sont la propriété de Location Bus Belgique
                SPRL. Toute reproduction totale ou partielle de ces marques ou logos, effectuée à partir des éléments du
                site sans l'autorisation expresse de Location Bus Belgique SPRL est donc prohibée.
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-2">Crédits Photos</h3>
              <p>
                Les photographies présentes sur ce site proviennent de notre propre flotte de véhicules ou sont issues de
                banques d'images libres de droits (Unsplash, Pexels) et utilisées conformément à leurs licences respectives.
              </p>
            </div>
          </div>

          {/* GDPR Compliance */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Protection des Données Personnelles (RGPD)</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi belge du 30 juillet 2018
                relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel,
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles
                vous concernant.
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-3">Responsable du Traitement des Données</h3>
              <p>
                <strong>Location Bus Belgique SPRL</strong><br />
                Rue Exemple 123, 1000 Bruxelles, Belgique<br />
                Email : <a href="mailto:privacy@location-bus.be" className="text-teal-600 hover:underline">privacy@location-bus.be</a>
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-3">Données Collectées</h3>
              <p>Les données personnelles collectées via notre site incluent :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Nom, prénom, société</li>
                <li>Adresse email et numéro de téléphone</li>
                <li>Informations relatives à votre demande de devis ou réservation</li>
                <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
              </ul>
              <h3 className="font-semibold text-lg mt-6 mb-3">Finalités du Traitement</h3>
              <p>Vos données personnelles sont utilisées pour :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Traiter vos demandes de devis et réservations</li>
                <li>Gérer la relation client et le service après-vente</li>
                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                <li>Améliorer la qualité de nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
              <h3 className="font-semibold text-lg mt-6 mb-3">Durée de Conservation</h3>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont
                été collectées, conformément aux obligations légales applicables. Les données clients sont conservées pendant
                la durée de la relation commerciale et 10 ans après la dernière transaction pour les obligations comptables.
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-3">Vos Droits</h3>
              <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certaines conditions</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement dans certains cas</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à <a href="mailto:privacy@location-bus.be" className="text-teal-600 hover:underline">privacy@location-bus.be</a>
              </p>
              <p className="mt-4">
                Vous avez également le droit d'introduire une réclamation auprès de l'Autorité de Protection des Données (APD) :
                <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline ml-1">
                  www.autoriteprotectiondonnees.be
                </a>
              </p>
              <p className="mt-4">
                Pour plus d'informations, consultez notre <Link to="/politique-confidentialite" className="text-teal-600 hover:underline font-semibold">Politique de Confidentialité</Link>.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur, analyser le trafic et personnaliser
                le contenu. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies conformément
                à notre politique de cookies.
              </p>
              <p>
                Vous pouvez à tout moment modifier les paramètres de cookies de votre navigateur pour refuser les cookies.
                Notez que certaines fonctionnalités du site peuvent être limitées si vous désactivez les cookies.
              </p>
              <p>
                Pour plus d'informations sur l'utilisation des cookies, consultez notre
                <Link to="/politique-confidentialite" className="text-teal-600 hover:underline ml-1 font-semibold">Politique de Confidentialité</Link>.
              </p>
            </div>
          </div>

          {/* Liability */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation de Responsabilité</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Location Bus Belgique SPRL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur
                ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations
                mises à disposition sur ce site.
              </p>
              <p>
                Location Bus Belgique SPRL ne saurait être tenue responsable :
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Des erreurs ou omissions dans le contenu du site</li>
                <li>De l'indisponibilité temporaire du site due à des opérations de maintenance ou à des problèmes techniques</li>
                <li>Des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder</li>
                <li>Du contenu des sites externes vers lesquels pointent les liens hypertextes présents sur notre site</li>
              </ul>
              <p className="mt-4">
                Les utilisateurs du site s'engagent à respecter les lois et règlements en vigueur et à ne pas porter atteinte
                aux droits de tiers ou à l'ordre public.
              </p>
            </div>
          </div>

          {/* Applicable Law */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Droit Applicable et Juridiction</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes mentions légales sont régies par le droit belge. En cas de litige et à défaut d'accord amiable,
                le litige sera porté devant les tribunaux compétents de Bruxelles, Belgique.
              </p>
              <p>
                L'utilisation de ce site implique l'acceptation pleine et entière des présentes mentions légales.
                Location Bus Belgique SPRL se réserve le droit de modifier à tout moment ces mentions légales pour les
                adapter aux évolutions du site et/ou de la législation.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl shadow-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Questions sur les Mentions Légales ?</h2>
            <p className="mb-6 text-green-50">
              Pour toute question concernant ces mentions légales ou l'utilisation de vos données personnelles,
              n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@location-bus.be"
                className="inline-flex items-center justify-center bg-white text-teal-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-all"
              >
                <Mail className="mr-2" size={20} />
                Nous Contacter
              </a>
              <Link
                to="/politique-confidentialite"
                className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition-all border-2 border-white"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
