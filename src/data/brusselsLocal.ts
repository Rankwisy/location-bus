/**
 * Zones hyperlocales Bruxelles : 19 communes et quartiers/axes.
 * Utilisé pour le schema areaServed et le contenu (mentions géographiques).
 */

/** 19 communes de la Région de Bruxelles-Capitale */
export const brusselsCommunes = [
  'Anderlecht',
  'Auderghem',
  'Berchem-Sainte-Agathe',
  'Bruxelles-Ville',
  'Etterbeek',
  'Evere',
  'Forest',
  'Ganshoren',
  'Ixelles',
  'Jette',
  'Koekelberg',
  'Molenbeek-Saint-Jean',
  'Saint-Gilles',
  'Saint-Josse-ten-Noode',
  'Schaerbeek',
  'Uccle',
  'Watermael-Boitsfort',
  'Woluwe-Saint-Lambert',
  'Woluwe-Saint-Pierre'
] as const;

/** Quartiers et axes connus (pour ancres et contenu) */
export const brusselsQuartiers = [
  'Quartier européen',
  'Louise',
  'Grand-Place',
  'Herrmann-Debroux',
  'Place Flagey',
  'Avenue Louise',
  'Quartier Nord',
  'Matongé',
  'Sablon',
  'Marolles'
] as const;

/** Liste pour schema.org areaServed (noms de communes) */
export const areaServedForSchema = brusselsCommunes.slice();

/** Texte court pour blocs contenu (ex. "Uccle, Auderghem, Woluwe-Saint-Pierre") */
export const sampleCommunesForCopy = [
  brusselsCommunes[15],  // Uccle
  brusselsCommunes[1],   // Auderghem
  brusselsCommunes[18]   // Woluwe-Saint-Pierre
] as const;

/** Texte court quartiers (ex. "Quartier européen, Louise, Grand-Place") */
export const sampleQuartiersForCopy = [
  brusselsQuartiers[0], // Quartier européen
  brusselsQuartiers[1], // Louise
  brusselsQuartiers[2]  // Grand-Place
] as const;
