import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserCheck, Database, Cookie, Mail } from 'lucide-react';
import { setPageSEO } from '../utils/seo';

const PolitiqueConfidentialitePage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Politique de Confidentialité - Protection de vos Données | Location Bus Belgique',
      description: 'Politique de confidentialité et protection des données personnelles de Location Bus Belgique. Conformité RGPD, gestion des cookies, et respect de votre vie privée.',
      keywords: 'politique confidentialité, protection données, RGPD, cookies, vie privée, sécurité données, location bus belgique',
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
              <Shield className="text-teal-500 mr-4" size={40} />
              <h1 className="text-4xl font-bold text-gray-900">Politique de Confidentialité</h1>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Chez Location Bus Belgique, nous prenons très au sérieux la protection de vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons
              vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl shadow-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4">En Bref</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Lock className="mr-3 flex-shrink-0 mt-1" size={20} />
                <span>Nous ne vendons jamais vos données personnelles à des tiers</span>
              </li>
              <li className="flex items-start">
                <Shield className="mr-3 flex-shrink-0 mt-1" size={20} />
                <span>Vos données sont sécurisées avec les protocoles les plus stricts</span>
              </li>
              <li className="flex items-start">
                <UserCheck className="mr-3 flex-shrink-0 mt-1" size={20} />
                <span>Vous gardez le contrôle total sur vos informations personnelles</span>
              </li>
              <li className="flex items-start">
                <Eye className="mr-3 flex-shrink-0 mt-1" size={20} />
                <span>Transparence totale sur l'utilisation de vos données</span>
              </li>
            </ul>
          </div>

          {/* Data Controller */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsable du Traitement</h2>
            <div className="text-gray-700 space-y-3">
              <p><strong>Identité :</strong> Location Bus Belgique SPRL</p>
              <p><strong>Adresse :</strong> Rue Exemple 123, 1000 Bruxelles, Belgique</p>
              <p><strong>Numéro d'entreprise :</strong> BE 0XXX.XXX.XXX</p>
              <p><strong>Email :</strong> <a href="mailto:privacy@location-bus.be" className="text-teal-600 hover:underline">privacy@location-bus.be</a></p>
              <p><strong>Téléphone :</strong> <a href="tel:+3223420734" className="text-teal-600 hover:underline">+32 2 342 07 34</a></p>
            </div>
          </div>

          {/* Data Collection */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Database className="text-teal-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Données Collectées</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-3">1. Données Fournies Directement</h3>
                <p className="mb-2">Lorsque vous utilisez nos services, nous collectons :</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Informations d'identité :</strong> nom, prénom, société</li>
                  <li><strong>Coordonnées :</strong> adresse email, numéro de téléphone, adresse postale</li>
                  <li><strong>Informations de réservation :</strong> dates, destinations, nombre de passagers, services demandés</li>
                  <li><strong>Informations de paiement :</strong> coordonnées bancaires (traitées de manière sécurisée par nos prestataires de paiement)</li>
                  <li><strong>Communications :</strong> messages, demandes, feedback envoyés via nos formulaires ou email</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Données Collectées Automatiquement</h3>
                <p className="mb-2">Lors de votre navigation sur notre site, nous collectons automatiquement :</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Données techniques :</strong> adresse IP, type de navigateur, système d'exploitation</li>
                  <li><strong>Données de navigation :</strong> pages visitées, durée de visite, source de trafic</li>
                  <li><strong>Données de localisation :</strong> pays, région, ville (basé sur l'adresse IP)</li>
                  <li><strong>Cookies et technologies similaires :</strong> voir section dédiée ci-dessous</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Données de Tiers</h3>
                <p>
                  Nous pouvons recevoir des informations vous concernant de la part de partenaires commerciaux,
                  plateformes de réseaux sociaux (si vous interagissez avec nous via ces canaux), ou prestataires
                  de services de paiement.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose of Processing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Finalités du Traitement</h2>
            <div className="space-y-4 text-gray-700">
              <p>Nous utilisons vos données personnelles pour les finalités suivantes :</p>

              <div className="border-l-4 border-teal-500 pl-4 py-2">
                <h3 className="font-semibold mb-2">Gestion des Services</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Traiter vos demandes de devis et réservations</li>
                  <li>Gérer la relation client et assurer le service après-vente</li>
                  <li>Organiser et coordonner les prestations de transport</li>
                  <li>Gérer les paiements et la facturation</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-semibold mb-2">Communication</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Répondre à vos questions et demandes d'information</li>
                  <li>Vous envoyer des confirmations de réservation et rappels</li>
                  <li>Vous informer de modifications concernant nos services</li>
                  <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-semibold mb-2">Amélioration des Services</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Analyser l'utilisation de notre site pour l'améliorer</li>
                  <li>Personnaliser votre expérience sur notre site</li>
                  <li>Réaliser des études de satisfaction client</li>
                  <li>Développer de nouveaux services adaptés à vos besoins</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold mb-2">Obligations Légales</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Respecter nos obligations comptables et fiscales</li>
                  <li>Répondre aux demandes des autorités compétentes</li>
                  <li>Prévenir la fraude et assurer la sécurité de nos services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Base Légale du Traitement</h2>
            <div className="space-y-3 text-gray-700">
              <p>Conformément au RGPD, nous traitons vos données sur la base de :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>L'exécution d'un contrat :</strong> traitement nécessaire pour fournir nos services de transport</li>
                <li><strong>Votre consentement :</strong> pour l'envoi de newsletters et communications marketing</li>
                <li><strong>Nos intérêts légitimes :</strong> amélioration de nos services, prévention de la fraude</li>
                <li><strong>Obligations légales :</strong> conformité aux lois comptables, fiscales et de transport</li>
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partage des Données</h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-lg">Nous ne vendons jamais vos données personnelles.</p>
              <p>Nous pouvons partager vos données avec :</p>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Prestataires de Services</h3>
                  <p>
                    Hébergement web, services de paiement, outils d'emailing, systèmes de gestion client.
                    Ces prestataires agissent en tant que sous-traitants et sont tenus par des obligations contractuelles
                    de confidentialité et de sécurité.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Partenaires Commerciaux</h3>
                  <p>
                    Dans le cadre de certaines prestations (excursions touristiques, événements), nous pouvons partager
                    vos coordonnées avec des partenaires locaux (hôtels, sites touristiques), uniquement dans la mesure
                    nécessaire à l'exécution du service.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Autorités Légales</h3>
                  <p>
                    En cas d'obligation légale ou pour protéger nos droits, nous pouvons communiquer vos données aux
                    autorités compétentes (police, administration fiscale, tribunaux).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Durée de Conservation</h2>
            <div className="text-gray-700">
              <p className="mb-4">Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-3 text-left">Type de Données</th>
                      <th className="border p-3 text-left">Durée de Conservation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Données clients actifs</td>
                      <td className="border p-3">Durée de la relation commerciale + 3 ans</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Données de facturation</td>
                      <td className="border p-3">10 ans (obligation légale comptable)</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Données prospects (devis non convertis)</td>
                      <td className="border p-3">3 ans à compter du dernier contact</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Cookies et données de navigation</td>
                      <td className="border p-3">13 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Newsletter (consentement marketing)</td>
                      <td className="border p-3">Jusqu'à retrait du consentement + 3 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                À l'expiration de ces délais, vos données sont supprimées de manière sécurisée ou anonymisées de façon
                irréversible pour des analyses statistiques.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Cookie className="text-teal-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Gestion des Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience, analyser le trafic et personnaliser
                le contenu. Un cookie est un petit fichier texte stocké sur votre appareil.
              </p>

              <h3 className="font-semibold text-lg mt-6 mb-3">Types de Cookies Utilisés</h3>

              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">Cookies Strictement Nécessaires</h4>
                  <p>
                    Essentiels au fonctionnement du site (session, sécurité). Ces cookies ne peuvent pas être désactivés.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Cookies Analytiques</h4>
                  <p>
                    Nous aident à comprendre comment vous utilisez notre site (Google Analytics). Vous pouvez les refuser.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold mb-2">Cookies de Performance</h4>
                  <p>
                    Améliorent la vitesse et la performance du site en mémorisant vos préférences.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold mb-2">Cookies Marketing (avec consentement)</h4>
                  <p>
                    Permettent d'afficher des publicités pertinentes et de mesurer l'efficacité de nos campagnes.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-6 mb-3">Gérer vos Cookies</h3>
              <p>
                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur :
              </p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/fr-be/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Microsoft Edge</a></li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <UserCheck className="text-teal-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Vos Droits</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Eye className="mr-2 text-teal-500" size={20} />
                    Droit d'Accès
                  </h3>
                  <p className="text-sm">Obtenir une copie de toutes les données personnelles que nous détenons sur vous.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <UserCheck className="mr-2 text-teal-500" size={20} />
                    Droit de Rectification
                  </h3>
                  <p className="text-sm">Corriger ou mettre à jour vos données si elles sont inexactes ou incomplètes.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Shield className="mr-2 text-teal-500" size={20} />
                    Droit à l'Effacement
                  </h3>
                  <p className="text-sm">Demander la suppression de vos données dans certaines conditions.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Lock className="mr-2 text-teal-500" size={20} />
                    Droit à la Limitation
                  </h3>
                  <p className="text-sm">Limiter le traitement de vos données dans certains cas.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Database className="mr-2 text-teal-500" size={20} />
                    Droit à la Portabilité
                  </h3>
                  <p className="text-sm">Recevoir vos données dans un format structuré et lisible par machine.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Shield className="mr-2 text-teal-500" size={20} />
                    Droit d'Opposition
                  </h3>
                  <p className="text-sm">Vous opposer au traitement de vos données pour des raisons légitimes.</p>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mt-6">
                <h3 className="font-semibold text-lg mb-3">Comment Exercer vos Droits ?</h3>
                <p className="mb-3">
                  Pour exercer l'un de ces droits, contactez-nous par email à
                  <a href="mailto:privacy@location-bus.be" className="text-teal-600 hover:underline font-semibold ml-1">privacy@location-bus.be</a>
                  ou par courrier postal à notre adresse.
                </p>
                <p className="text-sm">
                  Nous vous répondrons dans un délai d'un mois maximum. Une pièce d'identité pourra être demandée
                  pour vérifier votre identité.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mt-4">
                <h3 className="font-semibold text-lg mb-3">Droit de Réclamation</h3>
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de
                  l'Autorité de Protection des Données (APD) :
                </p>
                <div className="mt-3 space-y-1">
                  <p><strong>Adresse :</strong> Rue de la Presse 35, 1000 Bruxelles</p>
                  <p><strong>Téléphone :</strong> +32 2 274 48 00</p>
                  <p><strong>Email :</strong> <a href="mailto:contact@apd-gba.be" className="text-teal-600 hover:underline">contact@apd-gba.be</a></p>
                  <p><strong>Site web :</strong> <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.autoriteprotectiondonnees.be</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Lock className="text-teal-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Sécurité des Données</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger
                vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé ou la divulgation :
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Chiffrement SSL/TLS :</strong> Toutes les données transmises via notre site sont chiffrées</li>
                <li><strong>Contrôle d'accès :</strong> Accès limité aux données uniquement au personnel autorisé</li>
                <li><strong>Sauvegardes régulières :</strong> Vos données sont sauvegardées de manière sécurisée</li>
                <li><strong>Mises à jour de sécurité :</strong> Nos systèmes sont régulièrement mis à jour</li>
                <li><strong>Formation du personnel :</strong> Notre équipe est formée aux bonnes pratiques RGPD</li>
                <li><strong>Audits de sécurité :</strong> Évaluations régulières de nos mesures de protection</li>
              </ul>
              <p className="mt-4">
                Malgré ces mesures, aucune transmission de données sur Internet n'est totalement sécurisée. Nous ne
                pouvons garantir la sécurité absolue de vos données, mais nous nous engageons à faire tout notre possible
                pour les protéger.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications de cette Politique</h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment pour refléter
                les changements dans nos pratiques, nos services ou les exigences légales.
              </p>
              <p>
                En cas de modification substantielle, nous vous en informerons par email (si vous nous avez fourni une
                adresse email) ou via un avis visible sur notre site web au moins 30 jours avant l'entrée en vigueur
                des changements.
              </p>
              <p>
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en
                matière de protection des données.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl shadow-xl p-8 text-white text-center">
            <Mail className="mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">Questions sur la Protection de vos Données ?</h2>
            <p className="mb-6 text-green-50">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la confidentialité
              et la protection de vos données personnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@location-bus.be"
                className="inline-flex items-center justify-center bg-white text-teal-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-all"
              >
                <Mail className="mr-2" size={20} />
                privacy@location-bus.be
              </a>
              <Link
                to="/mentions-legales"
                className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition-all border-2 border-white"
              >
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialitePage;
