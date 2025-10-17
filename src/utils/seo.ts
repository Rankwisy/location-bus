export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'Location Bus Belgique - Transport Premium avec Chauffeur à Bruxelles',
  description: 'Location de bus et minibus avec chauffeur professionnel à Bruxelles. Service premium pour transferts aéroport, excursions touristiques et transport entreprise. Devis gratuit.',
  canonical: 'https://location-bus.be/',
  ogType: 'website',
  ogImage: 'https://ik.imagekit.io/by733ltn6/location-bus/cropped-Logo-Location_bus-1.png?updatedAt=1757933964171',
  twitterCard: 'summary_large_image',
  keywords: [
    'location bus belgique',
    'transport bus bruxelles',
    'chauffeur professionnel',
    'transfert aeroport',
    'excursion touristique',
    'minibus avec chauffeur',
    'voyage entreprise',
    'transport premium'
  ]
};

export const updatePageSEO = (config: Partial<SEOConfig>) => {
  const seoConfig = { ...defaultSEO, ...config };

  document.title = seoConfig.title;

  const metaTags = [
    { name: 'description', content: seoConfig.description },
    { name: 'keywords', content: seoConfig.keywords?.join(', ') || defaultSEO.keywords?.join(', ') },
    { name: 'author', content: seoConfig.author || 'Location Bus Belgique' },
    { property: 'og:title', content: seoConfig.title },
    { property: 'og:description', content: seoConfig.description },
    { property: 'og:type', content: seoConfig.ogType || 'website' },
    { property: 'og:url', content: seoConfig.canonical },
    { property: 'og:image', content: seoConfig.ogImage || defaultSEO.ogImage },
    { property: 'og:locale', content: 'fr_BE' },
    { property: 'og:site_name', content: 'Location Bus Belgique' },
    { name: 'twitter:card', content: seoConfig.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: seoConfig.title },
    { name: 'twitter:description', content: seoConfig.description },
    { name: 'twitter:image', content: seoConfig.ogImage || defaultSEO.ogImage },
  ];

  if (seoConfig.publishedTime) {
    metaTags.push({ property: 'article:published_time', content: seoConfig.publishedTime });
  }

  if (seoConfig.modifiedTime) {
    metaTags.push({ property: 'article:modified_time', content: seoConfig.modifiedTime });
  }

  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let meta = document.querySelector(selector);

    if (!meta) {
      meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
  });

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seoConfig.canonical);
};

export const addStructuredData = (data: object) => {
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Location Bus Belgique',
  legalName: 'Location Bus Belgique SPRL',
  url: 'https://location-bus.be',
  logo: 'https://ik.imagekit.io/by733ltn6/location-bus/cropped-Logo-Location_bus-1.png?updatedAt=1757933964171',
  foundingDate: '2008',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue Herrmann Debroux 54',
    addressLocality: 'Brussels',
    postalCode: '1160',
    addressCountry: 'BE'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+32-2-342-07-34',
    contactType: 'customer service',
    email: 'info@location-bus.be',
    availableLanguage: ['French', 'Dutch', 'English']
  },
  sameAs: [
    'https://www.facebook.com/locationbusbelgique',
    'https://www.instagram.com/locationbusbelgique'
  ]
};

export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://location-bus.be/#business',
  name: 'Location Bus Belgique',
  image: 'https://ik.imagekit.io/by733ltn6/location-bus/cropped-Logo-Location_bus-1.png?updatedAt=1757933964171',
  telephone: '+32-2-342-07-34',
  email: 'info@location-bus.be',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue Herrmann Debroux 54',
    addressLocality: 'Brussels',
    addressRegion: 'Brussels-Capital',
    postalCode: '1160',
    addressCountry: 'BE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.828611,
    longitude: 4.407723
  },
  url: 'https://location-bus.be',
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '19:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1000'
  }
};
