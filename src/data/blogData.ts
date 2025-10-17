import { BlogPost, BlogCategory, BlogAuthor } from '../types/blog';

export const blogAuthors: BlogAuthor[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    email: 'sophie@location-bus.be',
    bio: 'Experte en transport professionnel avec plus de 15 ans d\'expérience dans le secteur. Sophie partage ses conseils pour optimiser vos déplacements en groupe.',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Thomas Dubois',
    email: 'thomas@location-bus.be',
    bio: 'Spécialiste du tourisme en Belgique et guide touristique certifié. Thomas vous fait découvrir les plus belles destinations à explorer en bus.',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    created_at: '2024-01-01T00:00:00Z'
  }
];

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Conseils Transport',
    slug: 'conseils-transport',
    description: 'Tous nos conseils pour organiser vos déplacements en groupe',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Destinations',
    slug: 'destinations',
    description: 'Découvrez les meilleures destinations à visiter en bus',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Actualités',
    slug: 'actualites',
    description: 'Les dernières nouvelles du transport professionnel',
    created_at: '2024-01-01T00:00:00Z'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Comment Organiser un Transfert Aéroport pour un Groupe',
    slug: 'organiser-transfert-aeroport-groupe',
    excerpt: 'Découvrez nos meilleurs conseils pour organiser efficacement le transfert aéroport de votre groupe. De la réservation à l\'arrivée, nous vous guidons pas à pas.',
    content: `
      <h2>Introduction</h2>
      <p>L'organisation d'un transfert aéroport pour un groupe nécessite une planification minutieuse. Que ce soit pour un voyage d'affaires, une excursion scolaire ou un événement familial, suivez nos conseils d'experts.</p>

      <h2>1. Planifiez à l'Avance</h2>
      <p>La clé d'un transfert réussi réside dans l'anticipation. Réservez votre transport au moins 2 à 3 semaines avant la date prévue, surtout en haute saison. Cela vous garantit :</p>
      <ul>
        <li>La disponibilité du véhicule adapté à votre groupe</li>
        <li>Les meilleurs tarifs</li>
        <li>La possibilité de personnaliser votre trajet</li>
      </ul>

      <h2>2. Choisissez le Bon Véhicule</h2>
      <p>Le choix du véhicule dépend de plusieurs facteurs :</p>
      <ul>
        <li><strong>Nombre de passagers :</strong> Minibus (8-20 places) ou autocar (20-50 places)</li>
        <li><strong>Quantité de bagages :</strong> Assurez-vous d'avoir suffisamment d'espace</li>
        <li><strong>Confort souhaité :</strong> Véhicules premium avec équipements supplémentaires</li>
      </ul>

      <h2>3. Communiquez les Détails Importants</h2>
      <p>Fournissez à votre prestataire toutes les informations nécessaires :</p>
      <ul>
        <li>Numéro de vol et terminal</li>
        <li>Heure d'arrivée estimée</li>
        <li>Point de rendez-vous exact</li>
        <li>Nombre exact de passagers et bagages</li>
        <li>Besoins spécifiques (accessibilité, sièges enfants, etc.)</li>
      </ul>

      <h2>4. Prévoyez les Imprévus</h2>
      <p>Les retards de vol sont fréquents. Choisissez un service qui offre :</p>
      <ul>
        <li>Suivi en temps réel des vols</li>
        <li>Flexibilité en cas de retard</li>
        <li>Chauffeur disponible avec marge horaire</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Un transfert aéroport bien organisé commence avant même votre arrivée. Avec Location Bus Belgique, bénéficiez d'un service professionnel et fiable pour tous vos déplacements de groupe.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category_id: '1',
    author_id: '1',
    read_time: 5,
    is_featured: true,
    is_published: true,
    published_at: '2024-10-15T10:00:00Z',
    views_count: 245,
    created_at: '2024-10-15T10:00:00Z',
    updated_at: '2024-10-15T10:00:00Z',
    category: blogCategories[0],
    author: blogAuthors[0]
  },
  {
    id: '2',
    title: 'Top 10 Destinations Touristiques en Belgique Accessibles en Bus',
    slug: 'top-10-destinations-belgique-bus',
    excerpt: 'Explorez les plus belles destinations de Belgique avec votre groupe. Notre sélection des 10 lieux incontournables accessibles facilement en bus.',
    content: `
      <h2>Introduction</h2>
      <p>La Belgique regorge de trésors à découvrir. Voici notre sélection des 10 destinations incontournables pour une excursion en groupe.</p>

      <h2>1. Bruges - La Venise du Nord</h2>
      <p>Avec ses canaux pittoresques et son architecture médiévale, Bruges est une destination de choix. Distance depuis Bruxelles : 100 km, environ 1h15 en bus.</p>

      <h2>2. Gand - La Cité des Comtes</h2>
      <p>Gand combine patrimoine historique et vie culturelle dynamique. Parfait pour une journée d'excursion avec visite du château des Comtes. Distance : 55 km, environ 50 minutes.</p>

      <h2>3. Anvers - Capitale du Diamant</h2>
      <p>Découvrez la ville portuaire d'Anvers, son quartier des diamantaires et la maison de Rubens. Distance : 45 km, environ 45 minutes.</p>

      <h2>4. Les Ardennes - Nature Préservée</h2>
      <p>Pour les amateurs de nature, les Ardennes offrent des paysages spectaculaires. Durbuy, La Roche-en-Ardenne ou Han-sur-Lesse sont accessibles en 1h30 à 2h.</p>

      <h2>5. Dinant - Perle de la Meuse</h2>
      <p>Ville natale d'Adolphe Sax, Dinant séduit par sa citadelle et sa collégiale. Distance : 95 km, environ 1h15.</p>

      <h2>6. Waterloo - Site Historique</h2>
      <p>Revivez l'histoire au site de la bataille de Waterloo. Idéal pour les groupes scolaires et amateurs d'histoire. Distance : 20 km, 30 minutes.</p>

      <h2>7. Namur - Capitale Wallonne</h2>
      <p>Sa citadelle perchée offre une vue panoramique exceptionnelle. Distance : 65 km, environ 1h.</p>

      <h2>8. Liège - Cité Ardente</h2>
      <p>Découvrez la convivialité liégeoise, son marché de la Batte et le quartier du Carré. Distance : 95 km, environ 1h15.</p>

      <h2>9. Tournai - Plus Vieille Ville de Belgique</h2>
      <p>Sa cathédrale Notre-Dame est classée au patrimoine mondial de l'UNESCO. Distance : 85 km, environ 1h10.</p>

      <h2>10. La Côte Belge - Ostende et Knokke</h2>
      <p>Profitez des plages et de la promenade en bord de mer. Parfait pour les sorties d'été. Distance : 115 km, environ 1h30.</p>

      <h2>Conclusion</h2>
      <p>Ces destinations sont toutes facilement accessibles depuis Bruxelles. Contactez-nous pour organiser votre prochaine excursion !</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category_id: '2',
    author_id: '2',
    read_time: 7,
    is_featured: false,
    is_published: true,
    published_at: '2024-10-12T09:00:00Z',
    views_count: 189,
    created_at: '2024-10-12T09:00:00Z',
    updated_at: '2024-10-12T09:00:00Z',
    category: blogCategories[1],
    author: blogAuthors[1]
  },
  {
    id: '3',
    title: 'Sécurité et Réglementation du Transport de Groupe en 2024',
    slug: 'securite-reglementation-transport-groupe-2024',
    excerpt: 'Restez informés des dernières réglementations en matière de transport de groupe. Ce qu\'il faut savoir pour voyager en toute sérénité.',
    content: `
      <h2>Introduction</h2>
      <p>La sécurité des passagers est notre priorité absolue. Découvrez les normes et réglementations qui encadrent le transport de groupe en Belgique en 2024.</p>

      <h2>Normes de Sécurité Obligatoires</h2>
      <p>Tous nos véhicules respectent scrupuleusement :</p>
      <ul>
        <li>Contrôle technique régulier tous les 6 mois</li>
        <li>Système de freinage ABS et ESP obligatoire</li>
        <li>Limiteur de vitesse programmé</li>
        <li>Ceintures de sécurité à tous les sièges</li>
        <li>Système de détection d'incendie</li>
        <li>Marteaux brise-vitre et extincteurs</li>
      </ul>

      <h2>Qualifications des Chauffeurs</h2>
      <p>Nos chauffeurs disposent tous :</p>
      <ul>
        <li>Du permis D (transport de personnes)</li>
        <li>De la carte de qualification conducteur (CQC)</li>
        <li>D'une formation continue obligatoire (FCO)</li>
        <li>D'un casier judiciaire vierge</li>
        <li>D'examens médicaux réguliers</li>
      </ul>

      <h2>Temps de Conduite et Repos</h2>
      <p>La réglementation européenne impose :</p>
      <ul>
        <li>Maximum 9h de conduite par jour (extensible à 10h deux fois par semaine)</li>
        <li>Pause de 45 minutes après 4h30 de conduite</li>
        <li>Repos quotidien de 11 heures minimum</li>
        <li>Tachygraphe numérique obligatoire pour la traçabilité</li>
      </ul>

      <h2>Assurances et Responsabilités</h2>
      <p>Nous garantissons une couverture complète :</p>
      <ul>
        <li>Assurance responsabilité civile professionnelle</li>
        <li>Assurance tous risques pour les véhicules</li>
        <li>Assurance passagers (accidents corporels)</li>
        <li>Protection juridique</li>
      </ul>

      <h2>Nouvelles Réglementations 2024</h2>
      <p>Les évolutions récentes incluent :</p>
      <ul>
        <li>Renforcement des contrôles sur route</li>
        <li>Obligations environnementales accrues (normes Euro 6)</li>
        <li>Traçabilité GPS obligatoire</li>
        <li>Formation sur les gestes de premiers secours</li>
      </ul>

      <h2>Conseils pour les Passagers</h2>
      <p>Pour un voyage en toute sécurité :</p>
      <ul>
        <li>Attachez toujours votre ceinture</li>
        <li>Respectez les consignes du chauffeur</li>
        <li>Ne distrayez pas le conducteur pendant le trajet</li>
        <li>Signalez tout comportement dangereux</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Chez Location Bus Belgique, la sécurité n'est pas un option mais une exigence. Voyagez l'esprit tranquille avec des professionnels certifiés.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category_id: '3',
    author_id: '1',
    read_time: 6,
    is_featured: false,
    is_published: true,
    published_at: '2024-10-10T14:00:00Z',
    views_count: 156,
    created_at: '2024-10-10T14:00:00Z',
    updated_at: '2024-10-10T14:00:00Z',
    category: blogCategories[2],
    author: blogAuthors[0]
  },
  {
    id: '4',
    title: 'Événements d\'Entreprise : Pourquoi Choisir le Transport en Bus',
    slug: 'evenements-entreprise-transport-bus',
    excerpt: 'Les avantages du transport collectif pour vos événements professionnels : team building, séminaires, salons. Optimisez logistique et budget.',
    content: `
      <h2>Introduction</h2>
      <p>L'organisation d'événements d'entreprise implique de nombreux défis logistiques. Le transport collectif en bus représente une solution efficace et économique.</p>

      <h2>Avantages Économiques</h2>
      <h3>Réduction des Coûts</h3>
      <ul>
        <li>Un seul véhicule au lieu de multiples voitures individuelles</li>
        <li>Frais de parking regroupés</li>
        <li>Consommation de carburant optimisée</li>
        <li>Déductibilité fiscale des frais de transport professionnel</li>
      </ul>

      <h3>Budget Prévisible</h3>
      <p>Avec un devis fixe, maîtrisez vos dépenses sans surprises. Comparez : un trajet Bruxelles-Anvers coûte environ 400€ en bus (40 personnes) contre 2000€+ en taxis individuels.</p>

      <h2>Avantages Pratiques</h2>
      <h3>Ponctualité Garantie</h3>
      <ul>
        <li>Départ et arrivée coordonnés pour tout le groupe</li>
        <li>Pas d'attente des retardataires</li>
        <li>Respect du planning de l'événement</li>
      </ul>

      <h3>Flexibilité</h3>
      <ul>
        <li>Possibilité de multi-stops (hôtel, bureau, lieu d'événement)</li>
        <li>Adaptabilité aux changements de dernière minute</li>
        <li>Service porte-à-porte</li>
      </ul>

      <h2>Avantages pour les Collaborateurs</h2>
      <h3>Confort et Productivité</h3>
      <p>Vos équipes peuvent :</p>
      <ul>
        <li>Préparer l'événement ensemble pendant le trajet</li>
        <li>Se reposer après une journée intensive</li>
        <li>Networker dans un cadre informel</li>
        <li>Profiter du WiFi et des prises électriques</li>
      </ul>

      <h3>Sécurité</h3>
      <ul>
        <li>Chauffeur professionnel sobre et reposé</li>
        <li>Pas de risque d'accident lié à la fatigue</li>
        <li>Assurance complète pour tous les passagers</li>
      </ul>

      <h2>Impact Environnemental</h2>
      <p>Engagez votre entreprise dans une démarche RSE :</p>
      <ul>
        <li>Réduction de 75% des émissions de CO2 par personne</li>
        <li>Diminution de la congestion routière</li>
        <li>Image d'entreprise responsable</li>
      </ul>

      <h2>Types d'Événements Concernés</h2>
      <ul>
        <li><strong>Séminaires :</strong> Transport de l'équipe vers un lieu de formation</li>
        <li><strong>Team Building :</strong> Activités outdoor nécessitant un déplacement</li>
        <li><strong>Salons Professionnels :</strong> Transport vers les grandes foires</li>
        <li><strong>Conférences :</strong> Déplacement de délégations importantes</li>
        <li><strong>Soirées d'Entreprise :</strong> Événements avec service de retour inclus</li>
      </ul>

      <h2>Conseils pour l'Organisation</h2>
      <h3>Réservez à l'Avance</h3>
      <p>Pour les périodes de forte demande (septembre-octobre, mai-juin), réservez 4 à 6 semaines avant.</p>

      <h3>Communiquez Clairement</h3>
      <ul>
        <li>Envoyez les détails du transport à tous les participants</li>
        <li>Précisez le lieu et l'heure de départ</li>
        <li>Désignez un responsable de groupe</li>
      </ul>

      <h3>Prévoyez les Services Additionnels</h3>
      <ul>
        <li>Rafraîchissements à bord</li>
        <li>Système audio pour annonces</li>
        <li>Espace de rangement pour matériel événementiel</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Le transport en bus pour vos événements d'entreprise allie économie, praticité et confort. Concentrez-vous sur votre événement, nous gérons la logistique !</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category_id: '1',
    author_id: '1',
    read_time: 8,
    is_featured: false,
    is_published: true,
    published_at: '2024-10-08T11:00:00Z',
    views_count: 203,
    created_at: '2024-10-08T11:00:00Z',
    updated_at: '2024-10-08T11:00:00Z',
    category: blogCategories[0],
    author: blogAuthors[0]
  },
  {
    id: '5',
    title: 'Excursion Scolaire : Guide Complet pour les Enseignants',
    slug: 'excursion-scolaire-guide-enseignants',
    excerpt: 'Organisez une sortie scolaire en toute sécurité. Démarches administratives, choix du véhicule, encadrement : tout ce qu\'un enseignant doit savoir.',
    content: `
      <h2>Introduction</h2>
      <p>Les sorties scolaires enrichissent l'apprentissage des élèves. Voici un guide complet pour organiser votre excursion en bus en toute sérénité.</p>

      <h2>Démarches Administratives</h2>
      <h3>Autorisation de la Direction</h3>
      <ul>
        <li>Soumettez votre projet 4 à 6 semaines avant</li>
        <li>Précisez objectifs pédagogiques et programme détaillé</li>
        <li>Fournissez le budget prévisionnel</li>
      </ul>

      <h3>Autorisations Parentales</h3>
      <ul>
        <li>Formulaire signé par chaque responsable légal</li>
        <li>Copie des cartes d'identité des élèves</li>
        <li>Fiches sanitaires à jour (allergies, traitements)</li>
        <li>Numéros d'urgence à contacter</li>
      </ul>

      <h3>Assurances</h3>
      <ul>
        <li>Vérifiez la couverture de l'assurance scolaire</li>
        <li>Souscrivez une assurance annulation si nécessaire</li>
        <li>Confirmez que le transporteur est assuré (RC professionnelle)</li>
      </ul>

      <h2>Choix du Véhicule</h2>
      <h3>Capacité</h3>
      <p>Calculez le nombre de places nécessaires :</p>
      <ul>
        <li>Élèves + accompagnateurs + chauffeur</li>
        <li>Prévoyez 10% de marge pour le confort</li>
        <li>Exemple : 25 élèves + 3 accompagnateurs = minibus 30 places</li>
      </ul>

      <h3>Équipements Spécifiques</h3>
      <ul>
        <li>Ceintures de sécurité obligatoires</li>
        <li>Sièges adaptés aux différentes tailles</li>
        <li>Climatisation/chauffage</li>
        <li>WC à bord pour les longs trajets</li>
        <li>Espace de rangement pour les sacs</li>
      </ul>

      <h2>Taux d'Encadrement Réglementaire</h2>
      <h3>École Maternelle</h3>
      <ul>
        <li>2 adultes minimum dont le titulaire de classe</li>
        <li>1 adulte supplémentaire par tranche de 8 élèves</li>
      </ul>

      <h3>École Primaire</h3>
      <ul>
        <li>2 adultes minimum dont le titulaire de classe</li>
        <li>1 adulte supplémentaire par tranche de 12 élèves</li>
      </ul>

      <h3>Enseignement Secondaire</h3>
      <ul>
        <li>Minimum 2 accompagnateurs</li>
        <li>Recommandé : 1 pour 15 élèves</li>
      </ul>

      <h2>Préparation Pédagogique</h2>
      <h3>Avant la Sortie</h3>
      <ul>
        <li>Séance de préparation en classe sur le thème</li>
        <li>Présentation des règles de comportement</li>
        <li>Distribution d'un livret d'activités</li>
      </ul>

      <h3>Pendant le Trajet</h3>
      <ul>
        <li>Activités ludiques et éducatives</li>
        <li>Jeux d'observation du paysage</li>
        <li>Quiz sur la destination</li>
      </ul>

      <h3>Après la Sortie</h3>
      <ul>
        <li>Débriefing en classe</li>
        <li>Production d'un compte-rendu collectif</li>
        <li>Exposition photos ou présentation</li>
      </ul>

      <h2>Consignes de Sécurité</h2>
      <h3>Dans le Bus</h3>
      <ul>
        <li>Port de la ceinture obligatoire</li>
        <li>Rester assis pendant le trajet</li>
        <li>Ne pas déranger le chauffeur</li>
        <li>Respecter le matériel</li>
      </ul>

      <h3>Montée/Descente</h3>
      <ul>
        <li>Descendre uniquement sur autorisation</li>
        <li>Toujours du côté trottoir</li>
        <li>Pas de bousculade</li>
        <li>Vérification que tout le monde est bien à bord</li>
      </ul>

      <h2>Gestion du Budget</h2>
      <h3>Coûts à Prévoir</h3>
      <ul>
        <li>Location du bus (variable selon distance et durée)</li>
        <li>Péages autoroutiers éventuels</li>
        <li>Parking sur site</li>
        <li>Entrées au musée/activité</li>
        <li>Repas si journée complète</li>
      </ul>

      <h3>Financements Possibles</h3>
      <ul>
        <li>Participation des familles</li>
        <li>Subvention de l'établissement</li>
        <li>Association de parents</li>
        <li>Coopérative scolaire</li>
      </ul>

      <h2>Destinations Populaires pour Écoles</h2>
      <ul>
        <li><strong>Mini-Europe (Bruxelles) :</strong> Découverte de l'Europe</li>
        <li><strong>Pairi Daiza :</strong> Biodiversité et environnement</li>
        <li><strong>Grottes de Han :</strong> Géologie et nature</li>
        <li><strong>Planckendael :</strong> Animaux du monde</li>
        <li><strong>Musée des Sciences Naturelles :</strong> Dinosaures et évolution</li>
      </ul>

      <h2>Check-list de l'Enseignant</h2>
      <h3>1 Mois Avant</h3>
      <ul>
        <li>Réservation du transport</li>
        <li>Réservation du site</li>
        <li>Information aux parents</li>
      </ul>

      <h3>1 Semaine Avant</h3>
      <ul>
        <li>Collecte des autorisations parentales</li>
        <li>Constitution des groupes</li>
        <li>Préparation du matériel pédagogique</li>
      </ul>

      <h3>Jour J</h3>
      <ul>
        <li>Liste d'appel</li>
        <li>Trousse de premiers secours</li>
        <li>Téléphones chargés</li>
        <li>Coordonnées d'urgence</li>
        <li>Snacks et eau</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Une sortie scolaire bien organisée crée des souvenirs mémorables. Location Bus Belgique accompagne les écoles depuis plus de 15 ans pour des excursions en toute sécurité.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category_id: '1',
    author_id: '1',
    read_time: 10,
    is_featured: false,
    is_published: true,
    published_at: '2024-10-05T08:00:00Z',
    views_count: 312,
    created_at: '2024-10-05T08:00:00Z',
    updated_at: '2024-10-05T08:00:00Z',
    category: blogCategories[0],
    author: blogAuthors[0]
  },
  {
    id: '6',
    title: 'Amsterdam en Bus : Itinéraire d\'un Week-end Parfait',
    slug: 'amsterdam-bus-weekend-itineraire',
    excerpt: 'Partez découvrir Amsterdam depuis Bruxelles. Notre itinéraire détaillé pour un week-end inoubliable : musées, canaux, culture néerlandaise.',
    content: `
      <h2>Introduction</h2>
      <p>Amsterdam est à seulement 2h30 de Bruxelles en bus. Profitez d'un week-end dépaysant dans la capitale néerlandaise avec ce guide complet.</p>

      <h2>Pourquoi Choisir le Bus pour Amsterdam</h2>
      <h3>Avantages Pratiques</h3>
      <ul>
        <li>Pas de stress de conduite dans une ville inconnue</li>
        <li>Évitez les frais de parking (40-50€/jour au centre)</li>
        <li>Départ et retour confortables</li>
        <li>Économie par rapport au train (jusqu'à 50%)</li>
        <li>Parfait pour les groupes d'amis</li>
      </ul>

      <h2>Itinéraire Jour 1 - Vendredi</h2>
      <h3>Matin : Départ de Bruxelles</h3>
      <p><strong>6h00</strong> - Départ depuis Bruxelles</p>
      <p><strong>8h30</strong> - Arrivée à Amsterdam, installation à l'hôtel</p>

      <h3>Matinée : Centre Historique</h3>
      <p><strong>10h00</strong> - Visite du Dam (Place Centrale)</p>
      <ul>
        <li>Palais Royal</li>
        <li>Monument National</li>
        <li>Église Nieuwe Kerk</li>
      </ul>

      <p><strong>11h30</strong> - Quartier Rouge (de jour pour l'architecture)</p>
      <ul>
        <li>Oude Kerk (Vieille Église)</li>
        <li>Canaux pittoresques</li>
        <li>Maisons à pignons typiques</li>
      </ul>

      <h3>Après-midi : Culture et Shopping</h3>
      <p><strong>13h00</strong> - Déjeuner au marché Albert Cuyp</p>
      <p>Spécialités hollandaises à tester :</p>
      <ul>
        <li>Hareng cru (haring) avec oignons</li>
        <li>Stroopwafel fraîchement préparé</li>
        <li>Fromages néerlandais (Gouda, Edam)</li>
        <li>Bitterballen (croquettes)</li>
      </ul>

      <p><strong>15h00</strong> - Shopping Kalverstraat et 9 Straatjes</p>
      <ul>
        <li>Boutiques vintage</li>
        <li>Concept stores</li>
        <li>Magasins design néerlandais</li>
      </ul>

      <h3>Soirée : Canaux et Dîner</h3>
      <p><strong>18h00</strong> - Croisière sur les canaux au coucher du soleil</p>
      <p><strong>20h00</strong> - Dîner dans le quartier Jordaan</p>

      <h2>Itinéraire Jour 2 - Samedi</h2>
      <h3>Matin : Musées de Renommée Mondiale</h3>
      <p><strong>9h00</strong> - Musée Van Gogh (réservation obligatoire)</p>
      <ul>
        <li>Plus grande collection d'œuvres de Van Gogh</li>
        <li>Les Tournesols, La Chambre, etc.</li>
        <li>Durée : 2h</li>
      </ul>

      <p><strong>11h30</strong> - Rijksmuseum (Musée National)</p>
      <ul>
        <li>La Ronde de Nuit de Rembrandt</li>
        <li>La Laitière de Vermeer</li>
        <li>Art néerlandais du Siècle d'Or</li>
        <li>Durée : 2-3h</li>
      </ul>

      <h3>Après-midi : Quartiers Alternatifs</h3>
      <p><strong>14h30</strong> - Déjeuner à Foodhallen (food court tendance)</p>

      <p><strong>16h00</strong> - Quartier De Pijp</p>
      <ul>
        <li>Ambiance bohème</li>
        <li>Street art</li>
        <li>Cafés branchés</li>
      </ul>

      <p><strong>18h00</strong> - Vondelpark (si beau temps)</p>
      <ul>
        <li>Plus grand parc d'Amsterdam</li>
        <li>Parfait pour se détendre</li>
      </ul>

      <h3>Soirée : Vie Nocturne</h3>
      <p><strong>20h00</strong> - Dîner à Leidseplein</p>
      <p><strong>22h00</strong> - Bars et clubs (Rembrandtplein ou Leidseplein)</p>

      <h2>Itinéraire Jour 3 - Dimanche</h2>
      <h3>Matin : Expériences Locales</h3>
      <p><strong>8h00</strong> - Petit-déjeuner néerlandais</p>
      <ul>
        <li>Pain avec fromage et charcuterie</li>
        <li>Hagelslag (vermicelles chocolat)</li>
        <li>Café au lait</li>
      </ul>

      <p><strong>9h30</strong> - Marché aux fleurs (Bloemenmarkt)</p>
      <ul>
        <li>Unique marché flottant au monde</li>
        <li>Bulbes de tulipes à ramener</li>
        <li>Souvenirs authentiques</li>
      </ul>

      <p><strong>11h00</strong> - Maison d'Anne Frank (réservation obligatoire)</p>
      <ul>
        <li>Émouvante visite historique</li>
        <li>Durée : 1h30</li>
      </ul>

      <h3>Après-midi : Dernières Découvertes</h3>
      <p><strong>13h00</strong> - Déjeuner et shopping dernière minute</p>

      <p><strong>15h00</strong> - Retour vers Bruxelles</p>
      <p><strong>17h30</strong> - Arrivée à Bruxelles</p>

      <h2>Conseils Pratiques</h2>
      <h3>Réservations Essentielles</h3>
      <ul>
        <li>Musées : réservez en ligne 1 mois avant</li>
        <li>Restaurants populaires : réservez 1 semaine avant</li>
        <li>Maison d'Anne Frank : billets très demandés</li>
      </ul>

      <h3>Transport sur Place</h3>
      <ul>
        <li>À pied : centre-ville très compact</li>
        <li>Vélo : 15€/jour, typiquement hollandais</li>
        <li>Tram/métro : pass 24h à 8,50€</li>
        <li>Bateau-taxi : original mais cher</li>
      </ul>

      <h3>Budget Moyen</h3>
      <ul>
        <li>Transport bus (groupe) : 40-60€/personne A/R</li>
        <li>Hôtel : 80-150€/nuit (chambre double)</li>
        <li>Repas : 30-50€/jour</li>
        <li>Musées : 20-25€/entrée</li>
        <li>Activités : 50-100€</li>
        <li><strong>Total estimé : 300-450€/personne</strong></li>
      </ul>

      <h3>À Savoir</h3>
      <ul>
        <li>Espèces recommandées : certains endroits refusent les cartes</li>
        <li>Climat : imprévisible, prévoir parapluie</li>
        <li>Pistes cyclables : attention aux vélos partout !</li>
        <li>Coffee shops : réglementés, infos locales obligatoires</li>
      </ul>

      <h2>Ce qu'on Aime à Amsterdam</h2>
      <ul>
        <li>Architecture unique avec maisons penchées</li>
        <li>Ambiance décontractée et tolérante</li>
        <li>Culture vélo omniprésente</li>
        <li>Richesse culturelle (musées de classe mondiale)</li>
        <li>Canaux romantiques</li>
        <li>Gastronomie variée et internationale</li>
      </ul>

      <h2>Alternatives et Extensions</h2>
      <h3>Si Vous Avez un Jour de Plus</h3>
      <ul>
        <li><strong>Zaanse Schans :</strong> Moulins à vent traditionnels (30 min)</li>
        <li><strong>Volendam :</strong> Village de pêcheurs pittoresque (45 min)</li>
        <li><strong>Keukenhof :</strong> Jardin de tulipes (printemps uniquement)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Amsterdam se prête parfaitement à un week-end en groupe depuis Bruxelles. Avec Location Bus Belgique, profitez d'un transport confortable et organisez votre escapade sans stress !</p>

      <p><strong>Contactez-nous pour un devis personnalisé pour votre groupe !</strong></p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category_id: '2',
    author_id: '2',
    read_time: 12,
    is_featured: false,
    is_published: true,
    published_at: '2024-10-01T07:00:00Z',
    views_count: 278,
    created_at: '2024-10-01T07:00:00Z',
    updated_at: '2024-10-01T07:00:00Z',
    category: blogCategories[1],
    author: blogAuthors[1]
  }
];
