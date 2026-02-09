import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertCircle, CheckCircle, XCircle, CreditCard } from 'lucide-react';
import { setPageSEO } from '../utils/seo';

const CGVPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Conditions Générales de Vente - Location Bus Belgique | CGV Transport',
      description: 'Conditions générales de vente pour la location de bus et minibus avec chauffeur. Tarifs, réservations, annulations, responsabilités et modalités de paiement.',
      keywords: 'conditions générales vente, CGV, location bus, réservation, annulation, tarifs, paiement, responsabilité',
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
              <FileText className="text-teal-500 mr-4" size={40} />
              <h1 className="text-4xl font-bold text-gray-900">Conditions Générales de Vente</h1>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
              Location Bus Belgique SPRL et ses clients pour tous les services de location de bus et minibus
              avec chauffeur.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Article 1 - Champ d'Application */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 1 - Champ d'Application</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes CGV s'appliquent à toutes les prestations de transport de personnes proposées par
                Location Bus Belgique SPRL, ci-après dénommée "le Prestataire", à destination de ses clients
                particuliers et professionnels, ci-après dénommés "le Client".
              </p>
              <p>
                Le fait de réserver ou d'utiliser nos services implique l'acceptation pleine et entière des présentes
                CGV. Ces conditions prévalent sur tout autre document, sauf accord écrit préalable du Prestataire.
              </p>
              <p>
                Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables
                sont celles en vigueur à la date de la réservation.
              </p>
            </div>
          </div>

          {/* Article 2 - Services Proposés */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 2 - Services Proposés</h2>
            <div className="space-y-4 text-gray-700">
              <p>Le Prestataire propose les services suivants :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Location de bus et minibus avec chauffeur professionnel</strong> pour tout type de déplacement</li>
                <li><strong>Transferts aéroport</strong> (Brussels Airport, Charleroi, autres aéroports européens)</li>
                <li><strong>Transport d'événements</strong> (mariages, séminaires, congrès, manifestations sportives)</li>
                <li><strong>Excursions touristiques</strong> en Belgique et en Europe</li>
                <li><strong>Transport scolaire et universitaire</strong></li>
                <li><strong>Transport d'entreprise</strong> (personnel, délégations, clients)</li>
              </ul>
              <p className="mt-4">
                Tous nos véhicules sont conformes aux normes de sécurité belges et européennes, y compris aux normes
                environnementales LEZ Bruxelles (Euro 6).
              </p>
            </div>
          </div>

          {/* Article 3 - Réservation et Devis */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 3 - Réservation et Devis</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">3.1 Demande de Devis</h3>
              <p>
                Le Client peut demander un devis gratuit et sans engagement par téléphone, email ou via le formulaire
                de contact du site web. Le devis est valable 30 jours à compter de sa date d'émission.
              </p>

              <h3 className="font-semibold text-lg mt-6">3.2 Réservation</h3>
              <p>
                La réservation devient ferme et définitive dès réception par le Prestataire :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Du bon de commande signé ou de l'acceptation écrite du devis (email)</li>
                <li>Du versement de l'acompte (voir Article 4)</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">3.3 Informations Requises</h3>
              <p>
                Pour établir un devis précis, le Client doit fournir les informations suivantes :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Date et heure de départ</li>
                <li>Lieu de prise en charge et de destination</li>
                <li>Nombre de passagers</li>
                <li>Type de prestation souhaitée</li>
                <li>Services complémentaires éventuels (wifi, climatisation, équipements spéciaux)</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">3.4 Disponibilité</h3>
              <p>
                Les réservations sont confirmées sous réserve de disponibilité des véhicules et des chauffeurs.
                En période de forte demande (vacances scolaires, événements majeurs), une réservation anticipée
                est fortement recommandée.
              </p>
            </div>
          </div>

          {/* Article 4 - Tarifs et Paiement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <CreditCard className="text-teal-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Article 4 - Tarifs et Modalités de Paiement</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">4.1 Tarifs</h3>
              <p>
                Les tarifs sont établis en fonction de plusieurs critères :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Type et taille du véhicule</li>
                <li>Distance à parcourir</li>
                <li>Durée de la prestation</li>
                <li>Période de l'année (haute/basse saison)</li>
                <li>Services complémentaires demandés</li>
              </ul>
              <p className="mt-3">
                Les prix sont indiqués en euros (EUR) toutes taxes comprises (TTC), incluant la TVA belge de 21%.
              </p>

              <h3 className="font-semibold text-lg mt-6">4.2 Acompte</h3>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p>
                  <strong>Un acompte de 30% du montant total</strong> est exigé lors de la confirmation de la réservation.
                  Le solde est payable au plus tard 7 jours avant la date de la prestation.
                </p>
              </div>

              <h3 className="font-semibold text-lg mt-6">4.3 Modes de Paiement</h3>
              <p>Le paiement peut être effectué par :</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Virement bancaire (coordonnées communiquées sur facture)</li>
                <li>Carte bancaire (Visa, Mastercard)</li>
                <li>Espèces (uniquement pour les montants inférieurs à 3 000 €, conformément à la législation belge)</li>
                <li>Payconiq / Bancontact pour les particuliers</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">4.4 Frais Supplémentaires</h3>
              <p>
                Des frais supplémentaires peuvent s'appliquer dans les cas suivants :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Dépassement du kilométrage prévu (tarif au km communiqué au devis)</li>
                <li>Dépassement de la durée prévue (tarif horaire communiqué au devis)</li>
                <li>Stationnement payant, péages autoroutiers</li>
                <li>Services non prévus au contrat initial</li>
                <li>Nettoyage exceptionnel en cas de dégradation du véhicule</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">4.5 Retard de Paiement</h3>
              <p>
                En cas de retard de paiement, des pénalités de retard seront appliquées au taux légal en vigueur
                (actuellement 10% par an), ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement,
                conformément à la législation belge.
              </p>
            </div>
          </div>

          {/* Article 5 - Modification et Annulation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="text-orange-500 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">Article 5 - Modification et Annulation</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">5.1 Modification de Réservation</h3>
              <p>
                Toute modification de réservation doit être communiquée par écrit (email ou courrier recommandé).
                Les modifications sont acceptées sous réserve de disponibilité et peuvent entraîner une révision
                du tarif initial.
              </p>

              <h3 className="font-semibold text-lg mt-6">5.2 Annulation par le Client</h3>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="font-semibold mb-3">Conditions d'annulation :</p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Plus de 30 jours avant :</strong> Remboursement intégral de l'acompte (déduction de 10% de frais administratifs)
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="text-orange-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Entre 15 et 30 jours avant :</strong> Retenue de 50% du montant total
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Moins de 15 jours avant :</strong> Aucun remboursement, montant total dû
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-6">5.3 Annulation par le Prestataire</h3>
              <p>
                Le Prestataire se réserve le droit d'annuler une prestation en cas de force majeure (conditions
                météorologiques extrêmes, panne mécanique, maladie du chauffeur, etc.). Dans ce cas, le Client
                sera remboursé intégralement ou une solution de remplacement sera proposée.
              </p>

              <h3 className="font-semibold text-lg mt-6">5.4 Non-Présentation du Client</h3>
              <p>
                En cas de non-présentation du Client ("no-show") sans annulation préalable, l'intégralité du
                montant de la prestation reste due.
              </p>
            </div>
          </div>

          {/* Article 6 - Obligations du Client */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 6 - Obligations du Client</h2>
            <div className="space-y-4 text-gray-700">
              <p>Le Client s'engage à :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Respecter les horaires :</strong> Être présent au lieu de rendez-vous à l'heure prévue.
                  Un retard supérieur à 15 minutes peut entraîner l'annulation de la prestation sans remboursement.
                </li>
                <li>
                  <strong>Respecter la capacité :</strong> Ne pas dépasser le nombre de passagers prévu au contrat
                  (pour des raisons de sécurité et d'assurance).
                </li>
                <li>
                  <strong>Comportement approprié :</strong> Adopter un comportement respectueux envers le chauffeur
                  et ne pas endommager le véhicule. Toute dégradation sera facturée au Client.
                </li>
                <li>
                  <strong>Interdiction de fumer :</strong> Il est strictement interdit de fumer dans les véhicules
                  conformément à la législation belge.
                </li>
                <li>
                  <strong>Consommation d'alcool :</strong> La consommation d'alcool est tolérée avec modération,
                  sauf indication contraire. Le Prestataire se réserve le droit de refuser le transport de personnes
                  en état d'ébriété manifeste.
                </li>
                <li>
                  <strong>Bagages :</strong> Informer le Prestataire du volume de bagages. Le Prestataire décline
                  toute responsabilité en cas de perte ou de vol de bagages ou d'objets personnels laissés dans le véhicule.
                </li>
              </ul>
            </div>
          </div>

          {/* Article 7 - Responsabilité et Assurances */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 7 - Responsabilité et Assurances</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">7.1 Assurances du Prestataire</h3>
              <p>
                Le Prestataire dispose de toutes les assurances obligatoires requises pour le transport de personnes :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Assurance responsabilité civile professionnelle</li>
                <li>Assurance tous risques pour les véhicules</li>
                <li>Assurance passagers conformément à la législation belge</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">7.2 Limitation de Responsabilité</h3>
              <p>
                La responsabilité du Prestataire est limitée aux dommages directs causés par une faute prouvée
                de sa part ou de ses préposés (chauffeurs). Le Prestataire ne peut être tenu responsable :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Des retards causés par des circonstances indépendantes de sa volonté (trafic, météo, accidents)</li>
                <li>Des objets perdus ou volés dans le véhicule</li>
                <li>Des préjudices indirects (perte de revenus, manque à gagner, etc.)</li>
              </ul>

              <h3 className="font-semibold text-lg mt-6">7.3 Force Majeure</h3>
              <p>
                Le Prestataire ne saurait être tenu responsable de l'inexécution ou de la mauvaise exécution du
                contrat en cas de force majeure (catastrophe naturelle, grève, émeute, guerre, pandémie, décision
                gouvernementale, etc.).
              </p>
            </div>
          </div>

          {/* Article 8 - Protection des Données */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 8 - Protection des Données Personnelles</h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Le Prestataire collecte et traite les données personnelles du Client conformément au Règlement
                Général sur la Protection des Données (RGPD) et à la législation belge en vigueur.
              </p>
              <p>
                Les données collectées sont nécessaires à l'exécution du contrat et sont conservées pendant la
                durée légale requise. Le Client dispose d'un droit d'accès, de rectification, de suppression et
                d'opposition concernant ses données personnelles.
              </p>
              <p>
                Pour plus d'informations, consultez notre
                <Link to="/politique-confidentialite" className="text-teal-600 hover:underline font-semibold ml-1">
                  Politique de Confidentialité
                </Link>.
              </p>
            </div>
          </div>

          {/* Article 9 - Réclamations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 9 - Réclamations</h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Toute réclamation relative à une prestation doit être adressée par écrit au Prestataire dans un
                délai maximum de 8 jours suivant la fin de la prestation, par email à
                <a href="mailto:reclamations@location-bus.be" className="text-teal-600 hover:underline ml-1">
                  reclamations@location-bus.be
                </a> ou par courrier recommandé.
              </p>
              <p>
                Le Prestataire s'engage à accuser réception de la réclamation dans les 48 heures et à apporter
                une réponse dans un délai maximum de 15 jours ouvrables.
              </p>
              <p>
                En cas de litige persistant, le Client peut recourir à la médiation via le Service de Médiation
                pour le Consommateur (SMC) : <a href="https://www.mediationconsommateur.be" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.mediationconsommateur.be</a>
              </p>
            </div>
          </div>

          {/* Article 10 - Droit Applicable */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 10 - Droit Applicable et Juridiction</h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Les présentes CGV sont soumises au droit belge. Tout litige relatif à l'interprétation ou à
                l'exécution des présentes sera, à défaut d'accord amiable, de la compétence exclusive des
                tribunaux de Bruxelles, Belgique.
              </p>
              <p>
                Si une clause des présentes CGV était déclarée nulle ou inapplicable, les autres clauses
                resteraient en vigueur.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl shadow-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Questions sur nos Conditions Générales ?</h2>
            <p className="mb-6 text-green-50">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos
              conditions générales de vente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="inline-flex items-center justify-center bg-white text-teal-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-all"
              >
                Nous Contacter
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition-all border-2 border-white"
              >
                Découvrir nos Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGVPage;
