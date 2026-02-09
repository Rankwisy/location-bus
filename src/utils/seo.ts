export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string | string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
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

export const setPageSEO = (config: Partial<SEOConfig>) => {
  const currentPath = window.location.pathname;
  const baseUrl = 'https://location-bus.be';
  const canonicalUrl = config.canonical || `${baseUrl}${currentPath}`;

  const seoConfig = {
    ...defaultSEO,
    ...config,
    canonical: canonicalUrl
  };

  // Set page title
  document.title = seoConfig.title;

  // Normalize keywords
  const keywordsString = Array.isArray(seoConfig.keywords)
    ? seoConfig.keywords.join(', ')
    : seoConfig.keywords || defaultSEO.keywords?.join(', ') || '';

  // Comprehensive meta tags for 2026 SEO best practices
  const metaTags = [
    // Basic meta tags
    { name: 'description', content: seoConfig.description },
    { name: 'keywords', content: keywordsString },
    { name: 'author', content: seoConfig.author || 'Location Bus Belgique' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'language', content: 'French' },

    // Geo meta tags for local SEO
    { name: 'geo.region', content: 'BE-BRU' },
    { name: 'geo.placename', content: 'Brussels' },
    { name: 'geo.position', content: '50.828611;4.407723' },
    { name: 'ICBM', content: '50.828611, 4.407723' },

    // Open Graph tags
    { property: 'og:title', content: seoConfig.title },
    { property: 'og:description', content: seoConfig.description },
    { property: 'og:type', content: seoConfig.ogType || 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: seoConfig.ogImage || defaultSEO.ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'fr_BE' },
    { property: 'og:site_name', content: 'Location Bus Belgique' },

    // Twitter Card tags
    { name: 'twitter:card', content: seoConfig.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: seoConfig.title },
    { name: 'twitter:description', content: seoConfig.description },
    { name: 'twitter:image', content: seoConfig.ogImage || defaultSEO.ogImage },
    { name: 'twitter:image:alt', content: seoConfig.title },

    // Additional social media meta tags
    { name: 'pinterest:description', content: seoConfig.description },
    { property: 'fb:app_id', content: '123456789' }, // Replace with actual FB app ID if available

    // Dublin Core metadata
    { name: 'DC.title', content: seoConfig.title },
    { name: 'DC.description', content: seoConfig.description },
    { name: 'DC.language', content: 'fr-BE' },
    { name: 'DC.creator', content: 'Location Bus Belgique' },
    { name: 'DC.publisher', content: 'Location Bus Belgique' },
    { name: 'DC.rights', content: `Copyright ${new Date().getFullYear()} Location Bus Belgique` },

    // Mobile web app meta tags
    { name: 'theme-color', content: '#14b8a6' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Location Bus' },
  ];

  // Add article-specific meta tags if applicable
  if (seoConfig.publishedTime) {
    metaTags.push(
      { property: 'article:published_time', content: seoConfig.publishedTime },
      { property: 'article:author', content: seoConfig.author || 'Location Bus Belgique' }
    );
  }

  if (seoConfig.modifiedTime) {
    metaTags.push({ property: 'article:modified_time', content: seoConfig.modifiedTime });
  }

  // Add robots meta tag if noindex or nofollow is specified
  if (seoConfig.noindex || seoConfig.nofollow) {
    const robotsContent = [];
    if (seoConfig.noindex) robotsContent.push('noindex');
    if (seoConfig.nofollow) robotsContent.push('nofollow');
    metaTags.push({ name: 'robots', content: robotsContent.join(', ') });
  } else {
    metaTags.push({ name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' });
  }

  // Apply all meta tags
  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
  });

  // Set canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  // Add hreflang tags for French (primary language)
  // Remove any existing hreflang tags first
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

  // Add French hreflang (primary)
  const hreflangFr = document.createElement('link');
  hreflangFr.setAttribute('rel', 'alternate');
  hreflangFr.setAttribute('hreflang', 'fr-BE');
  hreflangFr.setAttribute('href', canonicalUrl);
  document.head.appendChild(hreflangFr);

  // Add x-default hreflang (fallback)
  const hreflangDefault = document.createElement('link');
  hreflangDefault.setAttribute('rel', 'alternate');
  hreflangDefault.setAttribute('hreflang', 'x-default');
  hreflangDefault.setAttribute('href', canonicalUrl);
  document.head.appendChild(hreflangDefault);

  // Add structured data if provided
  if (seoConfig.structuredData) {
    addStructuredData(seoConfig.structuredData);
  }
};

// Keep updatePageSEO for backward compatibility
export const updatePageSEO = setPageSEO;

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

export interface BlogPostStructuredDataParams {
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  authorName: string;
  authorUrl?: string;
  publishedAt: string;
  updatedAt: string;
  slug: string;
  categoryName?: string;
  readTime?: number;
}

export const createBlogPostStructuredData = (params: BlogPostStructuredDataParams) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `https://location-bus.be/blog/${params.slug}#article`,
  headline: params.title,
  description: params.excerpt,
  image: {
    '@type': 'ImageObject',
    url: params.featuredImage,
    width: 1200,
    height: 630
  },
  author: {
    '@type': 'Person',
    name: params.authorName,
    url: params.authorUrl || 'https://location-bus.be/about'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Location Bus Belgique',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ik.imagekit.io/by733ltn6/location-bus/cropped-Logo-Location_bus-1.png?updatedAt=1757933964171',
      width: 600,
      height: 60
    }
  },
  datePublished: params.publishedAt,
  dateModified: params.updatedAt,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://location-bus.be/blog/${params.slug}`
  },
  articleSection: params.categoryName,
  wordCount: params.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
  timeRequired: params.readTime ? `PT${params.readTime}M` : undefined,
  inLanguage: 'fr-BE',
  isAccessibleForFree: true
});

export const createBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createBlogCollectionStructuredData = (posts: Array<{ title: string; url: string; publishedAt: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://location-bus.be/blog#page',
  name: 'Blog Location Bus Belgique',
  description: 'Conseils transport, destinations touristiques et actualités du secteur',
  url: 'https://location-bus.be/blog',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: post.url
    }))
  }
});
