/**
 * Noyau sémantique et termes NLP pour le site Location Bus Belgique.
 * Alimente defaultSEO, configs par page et ancres de liens internes.
 */

/** Mots-clés noyau global (site entier) */
export const coreKeywords = [
  'location bus Bruxelles',
  'minibus chauffeur Bruxelles',
  'transport bus Bruxelles',
  'transfert aéroport Zaventem',
  'excursion bus Belgique',
  'transport groupe entreprise',
  'devis bus gratuit',
  'location autocar Belgique',
  'chauffeur professionnel Bruxelles',
  'bus avec chauffeur'
] as const;

/** Variantes sémantiques par thématique */
export const semanticByTheme = {
  transfert: [
    'transfert aéroport Bruxelles',
    'transfert Zaventem Charleroi',
    'navette aéroport groupe',
    'transfert groupe aéroport'
  ],
  excursion: [
    'excursion touristique bus',
    'circuit bus Belgique',
    'excursion groupe Europe',
    'voyage organisé bus'
  ],
  entreprise: [
    'transport entreprise Bruxelles',
    'bus séminaire',
    'déplacement professionnel groupe',
    'location bus événement entreprise'
  ],
  flotte: [
    'minibus 19 places',
    'bus 50 places Bruxelles',
    'autocar 60 places',
    'flotte Euro 6 Bruxelles'
  ],
  lez: [
    'LEZ Bruxelles',
    'normes Euro 6 Bruxelles',
    'zone basses émissions',
    'bus conforme LEZ'
  ],
  prix: [
    'prix location bus Bruxelles',
    'tarif minibus chauffeur',
    'devis gratuit bus',
    'coût transfert groupe'
  ]
} as const;

/** Termes NLP / long-tail (requêtes en forme de question ou longue traîne) */
export const nlpLongTail = [
  'combien coûte un bus avec chauffeur',
  'prix location minibus Bruxelles',
  'réserver un bus pour un mariage',
  'transfert groupe aéroport Charleroi',
  'devis bus 50 places gratuit',
  'location minibus avec chauffeur Bruxelles',
  'tarif transfert aéroport Zaventem',
  'excursion bus Bruges Gand',
  'transport entreprise séminaire Bruxelles',
  'bus conforme LEZ Bruxelles 2026'
] as const;

/** Ancres recommandées pour liens internes (page cible → libellé d’ancre) */
export const internalLinkAnchors = {
  '/': 'Location bus et minibus avec chauffeur à Bruxelles',
  '/services': 'Services transport bus Bruxelles : transferts et entreprise',
  '/flotte': 'Notre flotte minibus et bus avec chauffeur',
  '/excursions': 'Excursions touristiques en bus Belgique et Europe',
  '/lez-bruxelles': 'Normes LEZ Bruxelles 2026 et flotte Euro 6',
  '/qui-sommes-nous': 'Qui sommes-nous : expertise transport Bruxelles',
  '/contactez-nous': 'Demander un devis personnalisé gratuit',
  '/conditions-generales-vente': 'Tarifs et conditions générales de vente',
  '/blog': 'Blog et conseils transport'
} as const;

/**
 * Retourne les mots-clés pour une page donnée (noyau + thématique optionnelle).
 */
export function getPageKeywords(
  route: string,
  themes: Array<keyof typeof semanticByTheme> = []
): string[] {
  const base = [...coreKeywords];
  themes.forEach(theme => {
    base.push(...semanticByTheme[theme]);
  });
  return [...new Set(base)];
}
