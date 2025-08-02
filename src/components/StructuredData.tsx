import { siteDetails } from '@/data/siteDetails'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteDetails.company.name,
    description: siteDetails.company.description,
    url: siteDetails.siteUrl,
    logo: `${siteDetails.siteUrl}/favicon.ico`,
    image: `${siteDetails.siteUrl}/opengraph-image.png`,
    founder: {
      '@type': 'Person',
      name: siteDetails.company.founder,
    },
    foundingDate: siteDetails.company.established,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteDetails.company.location,
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteDetails.contact.phone,
      email: siteDetails.contact.email,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      `https://twitter.com/${siteDetails.social.twitter.replace('@', '')}`,
      `https://linkedin.com/${siteDetails.social.linkedin}`,
      `https://instagram.com/${siteDetails.social.instagram.replace('@', '')}`,
    ],
    serviceType: [
      'Business Automation',
      'AI Integration',
      'Digital Transformation',
      'Custom Software Development',
      'Growth Strategy Consulting',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteDetails.siteName,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    publisher: {
      '@type': 'Organization',
      name: siteDetails.company.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteDetails.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Growth Catalyst System',
    description: 'Complete digital transformation system that delivers predictable business growth through intelligent automation, AI integration, and bespoke software development.',
    provider: {
      '@type': 'Organization',
      name: siteDetails.company.name,
      url: siteDetails.siteUrl,
    },
    serviceType: 'Business Growth Consulting',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Growth Catalyst System Tiers',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Foundation Builder',
          description: 'Professional digital presence with strategic roadmap',
          price: '8000',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Momentum Accelerator',
          description: 'Transform your website into an intelligent revenue machine',
          price: '20000',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'System Dominator',
          description: 'Proprietary digital ecosystem with continuous optimization',
          price: '50000',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}
